var express = require('express');
module.exports = function() {
	var app = express();
	app.set('views', './app/views');
	app.set('view engine', 'jade');
	require('../app/routes/index.server.routes.js')(app);
	app.use(express.static('./public'));
	return app;
}