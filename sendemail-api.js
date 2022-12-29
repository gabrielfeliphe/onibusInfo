const TakeoutClient = require('takeout.js')
const client = new TakeoutClient()
client.login(process.env.TAKEOUT_TOKEN)

sendEmail = async function () {

const emailTemplate = {
    to: process.env.EMAIL,
    from: 'ONIBUS ESTÁ PROXIMO AO PONTO', // This will be (e.g) 'Takeout.js via Takeout' for free users
    subject: `O ONIBUS ESTÁ PROXIMO AO PONTO`,
    html: `<b>O ONIBUS ESTÁ PROXIMO AO PONTO</b>`,
}

   sendingStatus =  await client.send(emailTemplate)
    
   return sendingStatus
}
        
module.exports = {sendEmail}