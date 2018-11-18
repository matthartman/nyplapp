var index = require('./controllers/index.controller');
var scrape = require('./controllers/scrape.controller');

module.exports = function(app){	
	app.use('/', index);
}

module.exports = function(app){	
	app.use('/', scrape);
}