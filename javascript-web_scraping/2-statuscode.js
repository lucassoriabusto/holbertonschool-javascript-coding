#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    // Muestra el código de estado de la respuesta
    console.log('code:', response.statusCode);
  }
});
