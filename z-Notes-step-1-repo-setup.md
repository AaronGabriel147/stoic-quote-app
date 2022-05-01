# Step 1 repo and back end scaffolding setup: 
https://www.youtube.com/watch?v=-mcM5GB8OIA&t=1901s


Step 1:

This method will start the repo off locally, rather than on GitHub.
Create a folder on desktop. Name it whatever the repo name will be.
Example: documents/stoic-quote-app


cd into folder


touch index.js


touch .env


npm init -y (creates package.json) 


Add to scripts to package.json:
    "start": "node index.js",
    "server": "nodemon index.js"


npx gitignore node (this makes it so .env does not push to GitHub)


mkdir api


touch api/server.js routes/data.js (creates 2 files in 2 different folders)


Make your first commit:
git add .
git commit -m 'initial commit'


installs:
npm i -D nodemon (needs to be installed on it's own)


npm i express helmet cors morgan dotenv


_________________________________


Code inside index.js:


    require('dotenv').config();  // always put this at the top of your file.

    const server = require('./api/server');

    const PORT = process.env.PORT || 3000;



    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });


__________________________________



npm start (test this first, because when you deploy, if your start script is not right, it will not deploy.)



_______________________________________


Code to write inside .env:
PORT = 5000


_______________________________________


npm run server


_______________________________________


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



______________________________________________




Test endpoint: 
GET http://localhost:4040/

We expect to see:
{
  "status": 200,
  "message": "Welcome to the API",
  "time": "4/25/2022, 3:20:41 PM"
}



@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Open GitHub.com


Click 'create a new repository'. || 'New' (they change it with updates)


Give the repo the exact name that you have named it locally.


Click 'create repository'.


COPY & PASTE THIS IN TERMINAL:


echo "# stoic-quote-app" >> README.md


git add README.md


git commit -m 'readme'


(if you are already on main, skip this step, sometimes you're on master)
git branch -M main  


git remote add origin https://github.com/AaronGabriel147/stoic-quote-app.git


git push -u origin main



Refresh the webpage and you will see your repo on GitHub. 




DEPLOY starts at the 30 minute mark, but I think it may be best to switch video here.
Switch to Heroku/pg deployment.