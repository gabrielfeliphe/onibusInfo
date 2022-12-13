require('dotenv').config()
var axios = require('axios');
var ApiSendEmail = require('./sendemail-api.js')

const interval = 3000;

var functionRunCheck = false;

var config = {
    method: 'get',
    url: process.env.URL,
    headers: {
        'referer': process.env.HEADER
    }
};

var busReq

async function requireAPI() {
    while (true) {
        process.stdout.write('\033c');
        axios(config)
            .then(response => {
                console.log(response.data)
                busReq = response.data
                console.log(busReq[0].stop_order)
            })
            .catch(error => {
                console.log(error)
            });
        // espera o intervalo especificado antes de fazer a próxima requisição
        await new Promise(resolve => setTimeout(resolve, interval));

        if (busReq[0].stop_order >= 2) {
            console.log("ONIBUS SAIU DO TERMINAL")
            retorno = await ApiSendEmail.sendEmail()
            console.log(retorno)
            break;
        }
    }

}

requireAPI();

