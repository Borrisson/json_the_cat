const args = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');
const breedDescription = fetchBreedDescription(args, (err, description) => {
  if (!err) {
    console.log(description);
  } else {
    console.log(err);
  }
});