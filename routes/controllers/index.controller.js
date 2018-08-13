var express = require('express');
var router = express.Router();
var request = require('request');


console.log("API Token is: " + process.env.NYPL_API_TOKEN);

/* GET home page. */
router.get('/', function(req, res, next) {

	var nypl = {
		url: 'http://api.repo.nypl.org/api/v1/items/search?q=fountainhead&publicDomainOnly=false',
		headers: { "Authorization": "Token token="+ process.env.NYPL_API_TOKEN }
	}

	searchRequest = request(nypl, 
		function (error, response, body) {
			/*
			console.log('error:', error); // Print the error if one occurred
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			console.log('body:', body); // Print the HTML for the Google homepage.

			*/
			
			var myResults = JSON.parse(body);
			var numResults = myResults.nyplAPI.response.numResults;
			var bookList = myResults.nyplAPI.response.result;
			
			if (numResults == 1){
				bookList = [bookList];
			}
			
			console.log('body stuff:', numResults); // Print the HTML for the Google homepage.

			//debugger;
			
			data = {
	    		title : "Hi there",
	    		mattsgf : "sarah",
	    		request : body,
				numResults: numResults,
				bookList: bookList
	    	}
    	 	res.render('index', data);
		});
	
});

module.exports = router;
