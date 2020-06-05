const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, function(error, response, body) {
  if (error !== null) {
    console.error('Error: ', error);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("Error: Cat breed not found");
    } else {
      console.log(data[0]['description']);
    }
  }
});
