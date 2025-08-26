const axios = require('axios')

exports.handler = async function (event, context) {
  const { email } = JSON.parse(event.body)
  const apiKey = process.env.MAILERLITE_API_KEY
  
  // Group ID for "subscribers" group to trigger welcome automation
  const subscribersGroupId = '163760209940973266'

  try {
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

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    console.error('MailerLite API Error:', error.response?.data || error.message)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to subscribe.' }),
    }
  }
}
