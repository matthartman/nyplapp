var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');


console.log("Scraper is running");


/* GET home page. */
router.get('/scrape', function(req, res, next) {
	

	var nypl = {
		url: 'https://browse.nypl.org/iii/encore/search/C__St%3A%28Atlas%20Shrugged%29__Orightresult__U?lang=eng&suite=def'
	}

	searchRequest = request(nypl, 
		function (error, response, body) {
			/*
			console.log('error:', error); // Print the error if one occurred
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			console.log('body:', body); // Print the HTML for the Google homepage.

			*/

			console.log(body);
			data = {
	    		title : "👩‍🚀🎹",
	    		mattsgf : "sarah",
	    		request : body,
	    	}
    	 	res.render('scrape', data);
		});
	
});

module.exports = router;
