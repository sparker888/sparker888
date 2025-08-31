const axios = require('axios')

exports.handler = async function (event, context) {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { email } = JSON.parse(event.body)
    const apiKey = process.env.MAILERLITE_API_KEY
    
    // Group ID for "subscribers" group to trigger welcome automation
    const subscribersGroupId = '163760209940973266'

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email is required' }),
      }
    }

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not set')
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'API key not configured' }),
      }
    }

    console.log('Attempting to subscribe email:', email)

    const response = await axios({
      method: 'post',
      url: 'https://api.mailerlite.com/api/v2/subscribers',
      headers: {
        'X-MailerLite-ApiKey': apiKey,
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
        groups: [subscribersGroupId], // Add subscriber to the group
      },
    })

    console.log('MailerLite response:', response.status, response.data)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Successfully subscribed',
        data: response.data 
      }),
    }
  } catch (error) {
    console.error('MailerLite API Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: {
        url: error.config?.url,
        method: error.config?.method,
      }
    })

    // Handle specific MailerLite error codes
    if (error.response?.status === 400 && error.response?.data?.error?.email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Invalid email address',
          details: error.response.data.error 
        }),
      }
    }

    if (error.response?.status === 200 || error.response?.status === 201) {
      // Sometimes MailerLite returns success even with existing subscribers
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          message: 'Successfully subscribed',
          data: error.response?.data 
        }),
      }
    }

    return {
      statusCode: error.response?.status || 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to subscribe',
        details: error.response?.data || error.message 
      }),
    }
  }
}