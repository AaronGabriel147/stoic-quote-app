# Routes

# sources 

- All
    https://bloomtech.instructure.com/courses/1772/modules

- Model 
    https://bloomtech.instructure.com/courses/1772/pages/objective-3-write-database-access-methods?module_item_id=623867

- Gabriels follow along on routes
    https://www.youtube.com/watch?v=jWuzmKY5joM&t=2581s



- mkdir api/quotes


- touch api/quotes/quotes-router.js


- touch api/quotes/quotes-model.js


- I then pasted some of my old code/notes for reference and plan on watching some material on routes.


________________________________________________



Start with 1 model function, then move on to the router access function, 1 by 1. 


- Inside quotes-model.js:


    const db = require('../../data/db-config') // Database connection // Knex


    function getAll() {
    return db('quotes')
    }


    module.exports = {
    getAll
    }


___________________________________________________



Inside quotes-router.js:


    const router = require('express').Router();
    const Quotes = require('./quotes-model');


    // Gets all = localhost:4040/quotes

    router.get('/', async (req, res) => {
        try {
            const quotes = await Quotes.getAll()
            // console.log('quotes =', quotes);
            res.status(200).json(quotes)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    })


    module.exports = router;



___________________________________________________



Inside api/server.js:


Add route:

    // Routes 
    const quotesRouter = require('./quotes/quotes-router');  // Create a meaningful variable name (dataRouter).


Add use:


    server.use('/quotes', quotesRouter); // We create the path name, we are free to use any name (/banana).


___________________________________________________



Now a `GET` request should return all data:

- http://localhost:4040/quotes




Find my notes that explain exactly how to check each access function / endpoint:

    https://github.com/AaronGabriel147/web-sprint-challenge-adding-data-persistence/blob/main/api/project/router.js


    https://github.com/AaronGabriel147/web-sprint-challenge-adding-data-persistence/blob/main/api/task/router.js


Stopping video @ 122:00 for the searching of notes:

    https://www.youtube.com/watch?v=jWuzmKY5joM&t=2581s





CHECK README's for old and new versions of end points. 
I found them. Routes before middleware, and Heroku endpoint URI's. 

https://github.com/water-my-plantz/server-back-end/blob/main/README.md






