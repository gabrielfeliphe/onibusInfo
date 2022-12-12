require('dotenv').config()
var axios = require('axios');

const interval = 1000;

var config = {
    method: 'get',
    url: process.env.URL,
    headers: {
        'referer': process.env.HEADER
    }
};

async function requireAPI() {

    while (true) {
        axios(config)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });
        // espera o intervalo especificado antes de fazer a próxima requisição
        await new Promise(resolve => setTimeout(resolve, interval));
    }

}

requireAPI();

