#!/usr/bin/node

const request = require('request');
const apiBaseUrl = process.argv[2];

request(apiBaseUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const apiData = JSON.parse(body);

    const moviesWithWedgeAntilles = apiData.results.filter(movie => {
      return movie.characters.includes("https://swapi-api.hbtn.io/api/people/18/");
    });

    console.log(moviesWithWedgeAntilles.length);
  }
});
