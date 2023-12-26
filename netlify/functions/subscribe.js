const axios = require('axios')

exports.handler = async function (event, context) {
  const { email } = JSON.parse(event.body)
  const apiKey = process.env.MAILERLITE_API_KEY

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
      },
    })

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to subscribe.' }),
    }
  }
}
