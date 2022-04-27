# Step 2 Heroku and postgreSQL setup: 
- https://bloomtech-1.wistia.com/medias/2625bl7sei
- @ 9:25 is when the actual follow along starts if you already have Heroku CLI and a repo set up.
- @ 18:00 The section on postgres starts
- I left off at 28:00. This is about migrations so I will stop referencing this video in thisNotes file and start it in Notes 3.  

Download Heroku CLI


Confirm DL in the terminal:
heroku --version


Log in to Heroku:
heroku login


______________________________________


# Go to Heroku.com:

Click 'new' / 'create new app'


Name the app anything you want.


COPY & PASTE into terminal to hook up Heroku to the repo:
heroku git:remote -a thestoics


Click 'resources':


In the 'Add-on' section start typing 'Heroku Postgres and then click on it.



When we want to see the web app info like tables: while you are in resources, simply click the app name near the bottom. 
https://data.heroku.com/datastores/05c490ea-88fb-43e8-8690-234992160907#




_______________________________________________________





# Postgres set up 


Install postgres.


Inside Postgres / pgadmin:
Right click database and create a database, name it whatever you want and create a second database with the word 'test'  on it. This way we have two databases, one for testing and one for development. 



__________________________________________________________________________


touch .env


Code for .env:


PORT = 5000
NODE_ENV = development
DEV_DATABASE_URL = 'postgres:postgres@localhost:5432/db-name-banana'
TESTING_DATABASE_URL = 'postgres:postgres@localhost:5432/db-name-testing-banana'


___________________________________________________________________________



touch knexfile.js


// Code for knexfile.js:


require('dotenv').config()
const pg = require('pg')

if (process.env.DATABASE_URL) {
    pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
    client: 'pg',
    migrations: { directory: './data/migrations' },  // Change this accordingly. 
    seeds: { directory: './data/seeds' },
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: process.env.DEV_DATABASE_URL,
    },
    testing: {
        ...sharedConfig,
        connection: process.env.TESTING_DATABASE_URL,
    },
    production: {
        ...sharedConfig,
        connection: process.env.DATABASE_URL,
        pool: { min: 2, max: 10 },
    },
}


// The following chunk is MY ORIGINAL CODE BEFORE THE BUILD COPY AND PASTE*************
// Saving for reference:




// module.exports = {
//     development: {
//         client: 'pg',
//         connection: {
//             filename: './data/quotes.db3',
//         },
//         useNullAsDefault: true,
//         migrations: {
//             directory: './data/migrations',
//         },
//         seeds: {
//             directory: './data/seeds',
//         },
//     },
// };

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// module.exports = {
//     development: {
//         client: 'sqlite3',
//         connection: {
//             filename: './data/auth.db3'
//         },
//         useNullAsDefault: true,
//         migrations: {
//             directory: './data/migrations'
//         },
//         seeds: {
//             directory: './data/seeds'
//         },
//     },
//     production: {},
//     testing: {}
// };

