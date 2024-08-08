import express from 'express';

const app = express();

const request = require('request');
var muscle = 'biceps';
request.get({
  url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
  headers: {
    'X-Api-Key': 'YOUR_API_KEY'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
});