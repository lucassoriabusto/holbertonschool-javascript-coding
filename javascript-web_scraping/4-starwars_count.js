#!/usr/bin/node

const request = require('request');
const apiBaseUrl = process.argv[2];
const characterId = '18';

request(apiBaseUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const apiData = JSON.parse(body);

    let count = 0;

    // Recorre todas las películas en la respuesta
    for (const movie of apiData.results) {
      // Recorre todos los personajes de la película
      for (const characterUrl of movie.characters) {
        // Verifica si el personaje con ID 18 está presente en la película
        if (characterUrl.includes(`/people/${characterId}/`)) {
          count++;
        }
      }
    }
    // Imprime el número de películas en las que aparece "Wedge Antilles"
    console.log(count);
  }
});
