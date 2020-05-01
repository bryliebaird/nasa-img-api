const express = require('express');
const ejs = require('ejs');
const request = require('request');

const app = express();

const url = 'https://api.nasa.gov/planetary/apod?api_key=bD3IHCdlA2vbBqfpg1cGwNC2NNXFtbnqnVnjWwe5';

app.get('/', function(req, res){
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            let responseData = JSON.parse(body);
            console.log(responseData); 
            let imageUrl = responseData.url;
            let description = responseData.explanation;
            res.render('home.ejs', {image: imageUrl, description: description});
        }
    })
 })

app.listen(3000, function(req, res){
    console.log("NASA API is running on port 3000");
})







//You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:
//apiKey = 'bD3IHCdlA2vbBqfpg1cGwNC2NNXFtbnqnVnjWwe5';

