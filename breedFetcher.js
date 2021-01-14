const request = require('request');
const fetchBreedDescription = (catBreed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body)[0];
      callback(null, data.description);
    } else {
      callback('There was an error with your request:  ' + error);
    }
  });
};

module.exports = fetchBreedDescription;