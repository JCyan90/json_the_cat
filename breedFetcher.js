const request = require('request');
const domain = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

request(domain, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('error:', error);
  } else if (data.length === 0) {
    console.log(`Error: The breed ${process.argv[2]} is not found`);
  } else {
    console.log(data[0].description);
  }
});