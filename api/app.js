
// App.s (next time name it this) 

const express = require('express');
const helmet = require('helmet');   // Goes on top because it is security. 
const cors = require('cors');
const morgan = require('morgan');

// Routes 
const quotesRouter = require('./quotes/quotes-router');  // Create a meaningful variable name (dataRouter).

const app = express();
app.use(express.json());

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use('/quotes', quotesRouter); // We create the path name, we are free to use any name (/banana).


// Initial get request.
app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to the API',
        time: new Date().toLocaleString()
    });
});

// Error handling.
app.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
        status: err.status
    });
});


module.exports = app;