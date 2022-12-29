require('dotenv').config()
var axios = require('axios');
var ApiSendEmail = require('./sendemail-api.js')
var geolib = require('geolib');

const express = require('express')
const app = express()

app.get('/',async function(request, response){
    returnoFunc = await requireAPI()
    response.status(200).json(returnoFunc);
})

app.listen(3000)

const interval = 3000;

var config = {
    method: 'get',
    url: process.env.URL,
    headers: {
        'referer': process.env.HEADER
    }
};

var sendMail = false;

const PONTO_ONIBUS = { latitude: -26.2678, longitude: -48.8579 };

async function requireAPI() {
    while (true) {
        process.stdout.write('\033c');
        axios(config)
            .then(response => {
                busReq = response.data
                var items = filterReadyStop1ShapeId(busReq);

                var latitude, longitude;

                for ({ latitude, longitude } of items) {} // 

                sendMail = geolib.isPointWithinRadius(
                    { latitude, longitude },
                    PONTO_ONIBUS,
                    1500
                );

                console.log("SendMail: " + sendMail)
            })
            .catch(error => {
                console.log(error)
            });
        // espera o intervalo especificado antes de fazer a próxima requisição
        await new Promise(resolve => setTimeout(resolve, interval));

        if (sendMail == true) {
            console.log("ONIBUS ESTÁ PROXIMO AO SEU PONTO!")
            retorno = await ApiSendEmail.sendEmail()
            console.log(retorno)
            return ("ONIBUS ESTÁ PROXIMO AO SEU PONTO!")
            break;
        }
    }

}

function filterReadyStop1ShapeId(arr) {
    return arr.filter(function (item) {
        return (item.trip_status === "LIVE") && (item.stop_order >= 10) && item.shape_id.endsWith("0");
    });
}