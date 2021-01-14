const request = require('request');
const [args] = process.argv.slice(2, 3);
const CATS = (catBreed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body)[0];
      console.log(data.description);
    } else {
      console.log('There was an error with your request:  ' + error);
    }
  });
};


CATS(args);