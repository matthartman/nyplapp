var express = require('express');
var router = express.Router();
var request = require('request');


console.log("API Token is: " + process.env.NYPL_API_TOKEN);

function getBookData(passedURI){

	var bookData = {
		url: passedURI,
		headers: { "Authorization": "Token token="+ process.env.NYPL_API_TOKEN }
	}
	console.log("book data is:" + bookData);
	bookDataSearch = request(bookData,
		function (error,response, body) {
			//var myBookResults = JSON.parse(body);						
			//console.log(body);
			var myResults = JSON.parse(body);
			var resultsToReturn = myResults.nyplAPI.response.mods;
			console.log(resultsToReturn);
			return resultsToReturn;
		}
	)
	
}



/* GET home page. */
router.get('/', function(req, res, next) {

	var nypl = {
		url: 'http://api.repo.nypl.org/api/v1/items/search?q=atlas&publicDomainOnly=false',
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
			
			if (numResults < 1){
				firstBookURI = "No Results";
			} else {
				//GET FIRST BOOK RESULT
				var myBookArray = new Array();
				for (i = 0; i < numResults && i < 10; i++){
					myBookArray.push(getBookData(bookList[0].apiUri));
				}
				
			
			}
			
			
			
			
			var firstBookURI = bookList[0].apiUri;
			
			console.log('body stuff:', numResults); // Print the HTML for the Google homepage.

			//debugger;
			
			data = {
	    		title : "👩‍🚀🎹",
	    		mattsgf : "sarah",
	    		request : body,
				numResults: numResults,
				bookList: bookList,
				firstBookURI: firstBookURI
	    	}
    	 	res.render('index', data);
		});
	
});

module.exports = router;
