require('dotenv').config()
var axios = require('axios');
var ApiSendEmail = require('./sendemail-api.js')

const express = require('express')
const app = express()

app.get('/',async function(request, response){
    returnoFunc = await requireAPI()
    response.status(200).json(returnoFunc);
})

app.listen(3000)

const interval = 3000;

var functionRunCheck = false;

var config = {
    method: 'get',
    url: process.env.URL,
    headers: {
        'referer': process.env.HEADER
    }
};

var sendMail = false;

async function requireAPI() {
    while (true) {
        process.stdout.write('\033c');
        axios(config)
            .then(response => {
                console.log(response.data)
                busReq = response.data
                sendMail = filterReadyStop1ShapeId(busReq)
            })
            .catch(error => {
                console.log(error)
            });
        // espera o intervalo especificado antes de fazer a próxima requisição
        await new Promise(resolve => setTimeout(resolve, interval));

        if (sendMail == true) {
            console.log("ONIBUS SAIU DO TERMINAL")
            retorno = await ApiSendEmail.sendEmail()
            console.log(retorno)
            return ("Onibus Saiu do Terminal")
            break;
        }
    }

}

function filterReadyStop1ShapeId(arr) {
    return arr.some(function(item) {
      return (item.trip_status === "READY" || item.trip_status === "LIVE") && (item.stop_order === 1 || item.stop_order === 2) && item.shape_id.endsWith("0");
    });
  }


  