# Migrations and Seeds:    

@29:51
- https://bloomtech-1.wistia.com/medias/2625bl7sei
- I am starting this video at the 28:00 mark, that is when migrations start. 


    npm i knex


    npm i pg


# Custom scripts added:
    
    "rollback": "knex migrate:rollback",
    "migrate": "knex migrate:latest",
    "seed": "knex seed:run",
    "rollbackh": "heroku run knex migrate:rollback -a NAMEofAPPonHEROKU",    
    "migrateh": "heroku run knex migrate:latest -a NAMEofAPPonHEROKU",
    "seedh": "heroku run knex seed:run -a NAMEofAPPonHEROKU",
    "databaseh": "heroku pg:psql -a NAMEofAPPonHEROKU",
    "deploy": "git push heroku main"




Create folder and file:

    mkdir data

    touch data/config.js


________________________________________________


Inside data.config.js:



    // This file references 'knexfile.js'

    const knex = require('knex');

    const configs = require('../knexfile');

    const env = process.env.NODE_ENV || 'development';

    module.exports = knex(configs[env]);



    // Another version looked like this:
    // module.exports = knex(config.development);


________________________________________________



Create a migration table:

    knex migrate:make migration_name 


Rollback migrations:

    knex migrate:rollback


Update migrations:

    knex migrate:latest


Create seed:

    knex seed:make NAME_OF_SEED


Run seeds:

    knex seed:run










