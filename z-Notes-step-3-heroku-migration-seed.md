# Migrations and Seeds:    

@33:00 you can set up heroku db to work in the CLI `databaseh`
- https://bloomtech-1.wistia.com/medias/2625bl7sei
- I am starting this video at the 28:00 mark, that is when migrations start. 


    npm i knex


    npm i pg


# Custom scripts added:
    
    "rollback": "knex migrate:rollback",
    "migrate": "knex migrate:latest",
    "seed": "knex seed:run",
    "resetdb": "knex migrate:rollback && knex migrate:latest && knex seed:run",
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


# Canvas section on Knex migrations:
https://bloomtech.instructure.com/courses/1772/pages/objective-3-create-and-use-knex-migrations?module_item_id=623846

# Useful commands for reference:

Create a migration table:

    knex migrate:make MIGRATION_NAME   ('npx run' typed before the command gave a strange error and did not work) 


Rollback migrations:

    knex migrate:rollback


Update migrations:

    knex migrate:latest


Create seed:

    knex seed:make NAME_OF_SEED


Run seeds:

    knex seed:run


_________________________


Above are a list of useful commands, what I did was: 
- knex migrate:make MIGRATION_NAME
- knex migrate:latest


______________________________________________________


In the newly created `migration file`, the code should look like 'below' remember it takes a Promise:



    // "up": "knex migrate:latest",
    // "down": "knex migrate:rollback",

    // If you add a table you have to npm run down, then npm run up
    // npm run up creates the db (not on this build)
    // `user` can sign-up / create an account by providing a unique `username`, 
    // a valid mobile `phoneNumber` and a `password`. 

    // Production never has migrate down, only up.



    exports.up = async function (knex) {
        await knex.schema.createTable('quotes', table => {
            table.increments() // auto-incrementing id; primary key     
            table.text('author', 128)
            table.text('source', 128)
            table.text('quote')
        })
    };

    exports.down = async function (knex) {
        await knex.schema.dropTableIfExists('quotes')
    };





______________________________________________________

# Seeds
# Creating the first seed file:


- knex seed:make NAME_OF_SEED (Remember, knexfile is where the path information is given for migrations and seeds)


- Create seeds code*


- knex seed:run


Important to note, each time we want to re-seed, the DB must be reset:
- "resetdb": "knex migrate:rollback && knex migrate:latest && knex seed:run",






______________________________________________________




# Example fron an old seed I created on another project:

    // exports.seed = function (knex, Promise) {
    //   return knex('plants').truncate()
    //       .then(function () {
    //           return knex('plants').insert([
    //               {
    //                   species: 'Conium maculatum',
    //                   nickname: 'Hemlock',
    //                   water_frequency: 'Once every 2 days',
    //                   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Oenanthe_crocata_kz04.jpg/548px-Oenanthe_crocata_kz04.jpg'
    //               },
    //               {
    //                   species: 'Toxicodendron radicans',
    //                   nickname: 'Poison Ivy',
    //                   water_frequency: 'Once a week',
    //                   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2014-10-29_13_43_39_Poison_Ivy_foliage_during_autumn_leaf_coloration_in_Ewing%2C_New_Jersey.JPG/360px-2014-10-29_13_43_39_Poison_Ivy_foliage_during_autumn_leaf_coloration_in_Ewing%2C_New_Jersey.JPG'
    //               },
    //               {
    //                   species: 'Solanaceae',
    //                   nickname: 'Nightshade',
    //                   water_frequency: 'Once every 3 days',
    //                   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Illustration_Solanum_dulcamara0_clean.png/447px-Illustration_Solanum_dulcamara0_clean.png'
    //               }
    //           ]);
    //       });
    // };


______________________________________________



# Another example of seeds:

    exports.seed = function (knex) {
    return knex('children')
        .truncate()
        .then(function () {
        return knex('children').insert([
            { id: 1, parentId: 63, name: 'Claire Marie', pin: 1234 },
            { id: 2, parentId: 33, name: 'Audrey Belle', pin: 1234 },
            { id: 3, parentId: 86, name: 'Marcus Aurelius', pin: 1234 },
        ]);
        });
    };

    // Note, the parentId foriegn keys needed to be edited in the original repo. 




______________________________________________________














# Now we want to deploy to Heroku:

    - git add .
    - git commit -m 'Heroku push.'
    - heroku git:remote -a thestoics (this makes sure your repo is connected to Heroku)
    - git push heroku main (must merge branch to main first, I think...)
    - npm run migrateh


Now if the 'Batch' has run, go to heroku.com, click app, then resources, then postgres, and see if the tables have changed!



_______________________________________




@33:00 you can set up heroku db to work in the CLI `databaseh`
- https://bloomtech-1.wistia.com/medias/2625bl7sei
- Otherwise that is the end of this file.
