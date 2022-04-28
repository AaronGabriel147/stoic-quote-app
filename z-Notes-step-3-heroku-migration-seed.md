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

# Seeds:

- knex seed:make NAME_OF_SEED


- knex seed:run


Important to note, each time we want to re-seed, the DB must be reset:
- "resetdb": "knex migrate:rollback && knex migrate:latest && knex seed:run",

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


# A quote to use for a seed:

    Enchiridion 5               
    It is not things themselves that trouble us, but our judgements about things. Death, for instance, is nothing terrible, otherwise it would have appeared that way to Socrates as well. The terrible thing is the judgement that death is terrible. So whenever we are frustrated, or troubled, or pained, let us never hold anyone responsible except ourselves, meaning our own judgements.
    
    Uneducated people blame others when they are doing badly. 

    Those whose education is underway blame themselves. 

    But the fully educated person blames no one, neither himself or anyone else.


# Quote

    Your intentions to act are always with a reserve clause, remember; you were not aiming at the impossible. At what then? Simply at making the attempt itself. In this you succeeded; and with that, the object of your existence is attained."


# Quote

    Marcus Aurelius, Meditations, 7:47 
    Observe the movement of the stars as if you were running their courses
    with them, and let your mind constantly dwell on the changes of the
    elements into each other.

    Such imaginings wash away the filth of life on the ground.


# Quote

    Seneca 95.51 letters
    It is more wretched to harm than to be harmed.


# Quote

    ~Cato (On Ends, Cicero - Section 3.12)
    The immediate target is to acquire something with selective value. The overall aim is to be a virtuous person; this is a skill like that of an archer, but one extending over one's life as a whole. Achieving the overall aim is compatible with missing the immediate target, and, since they have different kinds of value, they are not competing goals in life.


# Quote

    On Ends 3.22
    Take the case of one whose task it is to shoot a spear or arrow straight at some target. One’s ultimate aim is to do all in one’s power to shoot straight, and the same applies with our ultimate goal. In this kind of example, it is to shoot straight that one must do all one can; none the less, it is to do all one can to accomplish the task that is really the ultimate aim. It is just the same with what we call the supreme good in life. To actually hit the target is, as we say, to be selected but not sought.


# Quote

    ~Pierre Hadot, The Inner Citadel, pg 106-7
    The hēgemonikon is alone free, because it alone can give or refuse its assent to that inner discourse which enunciates what the object is which is represented by a given phantasia. This borderline which objects cannot cross, this inviolable stronghold of freedom, is the limit of what I shall revert to as the "inner citadel."


# Quote

    Antipater (Stob 2.7.6a)
    Live continually selecting what is in accordance with nature and rejecting what is contrary to nature.


# Quote 

    Meditations 11.18.7
    It is not people's actions that trouble us, but our judgements of them, because the harm lies in their own directing minds. Remove these judgements, make up your mind to dismiss your assessment of some supposed outrage, and your anger is gone. 

    And how to remove them? By reflecting that no moral harm has been done to you. Moral harm is the only true harm.


# Quote:

    Meditations 11.18.9
    Kindness is invincible, if it is sincere and not an act. What can the most aggressive man do to you if you continue to be kind to him? 

# Quote

    Seneca Letter, 113.2
    Virtue is nothing other than the mind disposed in a certain way.


# Quote 

    Seneca, Letters 2.31.1
    Each person has accomplished as much as he intended. 


# Quote 

    Seneca, Letters 4.21.6
    A good intention is of use on the rack, even in the ﬂame which is applied to one limb after another and slowly surrounds the body, even if my heart, though fully aware of its goodness, drips with blood: it will delight in the ﬂame through which its good faith shines forth.


# Quote 

    Seneca, Letters 6.9.3
    There is no beneﬁt unless it proceeds from a good intention.




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
