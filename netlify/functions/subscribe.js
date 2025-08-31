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
    
    // Your "Subscriber" group ID from MailerLite
    const subscriberGroupId = '163760209940973266'

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

    console.log('Adding subscriber to group:', email, subscriberGroupId)

    const response = await axios({
      method: 'post',
      url: 'https://api.mailerlite.com/api/v2/subscribers',
      headers: {
        'X-MailerLite-ApiKey': apiKey,
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
        groups: [subscriberGroupId], // This assigns them to your "Subscriber" group
      },
    })

    console.log('MailerLite response:', response.status, response.data)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Successfully subscribed and added to group',
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