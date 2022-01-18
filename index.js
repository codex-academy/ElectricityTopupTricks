const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		counter
	});
});

app.post('/count', function(req, res) {
	counter++;
	res.redirect('/')
});


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});