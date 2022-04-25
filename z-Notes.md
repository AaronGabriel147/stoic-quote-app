Video 1 Zac setup https://www.youtube.com/watch?v=-mcM5GB8OIA&t=1901s

Step 1:

This method will start the repo off locally, rather than on GitHub.
Create a folder on desktop. Name it whatever the repo name will be.
documents/stoic-quote-app

cd into folder


touch index.js


npm init -y [creates package.json]


Add to scripts:
    "start": "node index.js",
    "server": "nodemon index.js"


npx gitignore node (this makes it so .env does not push to GitHub)


mkdir api data routes

touch api/server.js routes/data.js


git add .
git commit -m 'initial commit'


installs:
npm i -D nodemon


npm i express helmet cors morgan dotenv


_________________________________


First piece of code written. Inside index.js:


require('dotenv').config();  // always put this at the top of your file.

const server = require('./api/server');

const PORT = process.env.PORT || 3000;



server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


__________________________________



npm start (test this first, because when you deploy, if your start script is not right, it will not deploy.)


touch .env


Code to write inside .env:
PORT = 5000

npm run server


___________________________________________


Code for api/server/js:


const express = require('express');
const helmet = require('helmet');   // Goes on top because it is security. 
const cors = require('cors');
const morgan = require('morgan');

// Routes
// const dataRouter = require('../routes/data');  // Create a meaningful variable name (dataRouter).

const server = express();
server.use(express.json());

server.use(cors());
server.use(morgan('dev'));
server.use(helmet());

// server.use('/data', dataRouter); // We create the path name, we are free to use any name (/banana).


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



______________________________________________________




Test endpoint: 
GET http://localhost:4040/

We expect to see:
{
  "status": 200,
  "message": "Welcome to the API",
  "time": "4/25/2022, 3:20:41 PM"
}