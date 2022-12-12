const TakeoutClient = require('takeout.js')
const client = new TakeoutClient()
client.login(process.env.TAKEOUT_TOKEN)

sendEmail = async function () {

const emailTemplate = {
    to: process.env.EMAIL,
    from: 'ONIBUS SAIU DO TERMINAL', // This will be (e.g) 'Takeout.js via Takeout' for free users
    subject: `O Ônibus acabou de sair do terminal`,
    html: `<b>O Ônibus acabou de sair do terminal</b>`,
}

   sendingStatus =  await client.send(emailTemplate)
    
   return sendingStatus
}
        
module.exports = {sendEmail}