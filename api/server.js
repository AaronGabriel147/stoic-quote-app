const express = require('express');
const helmet = require('helmet');   // Goes on top because it is security. 
const cors = require('cors');
const morgan = require('morgan');

// Routes 
const quotesRouter = require('./quotes/quotes-router');  // Create a meaningful variable name (dataRouter).

const server = express();
server.use(express.json());

server.use(cors());
server.use(morgan('dev'));
server.use(helmet());

server.use('/quotes', quotesRouter); // We create the path name, we are free to use any name (/banana).


// Initial get request.
server.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to the API',
        time: new Date().toLocaleString()
    })
})


// Error handling.
server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
        status: err.status
    });
});


module.exports = server;