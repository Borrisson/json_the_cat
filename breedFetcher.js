const request = require('request');
const fetchBreedDescription = (catBreed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    const data = JSON.parse(body)[0];
    if (!error && data) {
      callback(null, data.description);
    } else if (error) {
      callback('There was an error with your request:  ' + error);
    } else {
      callback('There was an error with your cat breed request:  ' + catBreed);
    }
  });
};

module.exports = { fetchBreedDescription };