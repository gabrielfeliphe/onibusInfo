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

function getTime() {
      const d = new Date();
      let h = addZero(d.getHours());
      let m = addZero(d.getMinutes());
      let time = h + ":" + m
      return time
}

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}


async function start(){
    while(true){
        console.log(getTime())
        if(getTime() === '17:42' && functionRunCheck == false){    
            await requireAPI();
        }  
        process.stdout.write('\033c');
        console.log("nao entrou no if")
    } 
}

start()

