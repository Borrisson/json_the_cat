const request = require('request');
const fetchBreedDescription = (catBreed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (!error && data.length) {
      callback(null, data[0].description);
    } else if (error) {
      callback('There was an error with your request:  ' + error);
    } else {
      callback('There was an error with your cat breed request:  ' + catBreed);
    }
  });
};

module.exports = { fetchBreedDescription };