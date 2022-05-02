# Routes

# sources 

- All
    https://bloomtech.instructure.com/courses/1772/modules

- Model 
    https://bloomtech.instructure.com/courses/1772/pages/objective-3-write-database-access-methods?module_item_id=623867

- Gabriels follow along on routes
    https://www.youtube.com/watch?v=jWuzmKY5joM&t=2581s


- CHECK README's for old and new versions of end points. 
    Routes before middleware, and Heroku endpoint URI's. 

    https://github.com/water-my-plantz/server-back-end/blob/main/README.md



_______________________________________________




- mkdir api/quotes


- touch api/quotes/quotes-router.js


- touch api/quotes/quotes-model.js


- touch api/quotes/quotes-middleware.js



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



# Inside quotes-router.js:

# Note, this is a version right before the middleware*


const router = require('express').Router();
const Quotes = require('./quotes-model');

// For delete & Update by id endpoints: 
// checkID Middleware is not set up yet. Make sure that gets set up.

// Gets all = localhost:4040/quotes
router.get('/', async (req, res) => {
    try {
        const quotes = await Quotes.getAll();
        // console.log('quotes =', quotes);
        res.status(200).json(quotes);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


// https://github.com/AaronGabriel147/web-sprint-challenge-adding-data-persistence/blob/main/api/task/router.js
//  This is the version without checkId Middleware. See below notes for middleware version.
// Saved just to compare it .then to async await.
// router.get('/:id', (req, res, next) => {
//     Quotes.findById(req.params.id)
//         .then(item => {
//             if (!item) {
//                 res.status(404).json({
//                     message: "The post with the specified ID does not exist"
//                 })
//             } else res.status(200).json(item)
//         })
//         .catch(next)   // Not sure I have this 500 catch correct...
// });


// checkID Middleware is not set up yet. Make sure that gets set up.
// getById = http://localhost:4040/quotes/7
router.get('/:id', async (req, res) => {
    try {
        const quotes = await Quotes.findById(req.params.id);
        if (!quotes) res.status(404).json({ message: 'This ID does not exist' });
        else res.status(200).json(quotes);
    }
    catch (err) { res.status(500).json({ message: err.message }) }
});


// Create  = http://localhost:4040/quotes
router.post('/', async (req, res) => {
    const createdQuote = await Quotes.create(req.body)
    res.status(201).json(createdQuote)
})


// checkID Middleware is not set up yet. Make sure that gets set up.
// Delete by id = http://localhost:4040/quotes/:id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Quotes.remove(id)
    res.status(204).json(`Plant id: ${id} information has been removed.`)
})

// checkID Middleware is not set up yet. Make sure that gets set up.
// Update by id. = http://localhost:4040/quotes/:id
router.put('/:id', async (req, res) => {
    const updatedQuote = await Quotes.updateById(req.params.id, req.body)
    res.status(200).json(updatedQuote)
})




module.exports = router;

















// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@ NOTES BELOW @@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// const router = require('express').Router();
// const Plants = require('./plants-model');
// const { checkId, checkPayload } = require('./plants-middleware');



// // Gets all plant info. = localhost:9000/plants
// router.get('/', async (req, res) => {
//     try {
//         const plants = await Plants.getAll()
//         res.status(200).json(plants)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })


// // Get by plant id. = localhost:9000/plants/:id
// router.get('/:id', checkId, async (req, res) => {
//     const plantData = await Plants.findById(req.params.id)
//     res.status(200).json(plantData)
// })


// // Create plant data. = localhost:9000/plants/addplant
// router.post('/addplant', checkPayload, async (req, res) => {
//     const createdPlant = await Plants.create(req.body)
//     res.status(201).json(createdPlant)
// })


// // Update plant data by id. = localhost:9000/plants/:id
// router.put('/:id', checkId, async (req, res) => {
//     const updatedPlant = await Plants.updateById(req.params.id, req.body)
//     res.status(200).json(updatedPlant)
// })


// // Delete plant data by id. = localhost:9000/plants/:id
// router.delete('/:id', checkId, async (req, res) => {
//     const id = req.params.id;
//     await Plants.remove(id)
//     res.status(204).json(`Plant id: ${id} information has been removed.`)
// })



// module.exports = router;








// _______________________________________________


 # Inside quote-model:



const db = require('../../data/db-config') // Database connection // Knex


function getAll() {
  return db('quotes')
}

function findById(idArg) {
  return db('quotes').where({ id: idArg }).first();  // .first() when you want 1 thing
}

async function create(newQuote) {
  const [quote_data] = await db('quotes').insert(newQuote, ['*']); // This was different due to being Postgres rather than SQLite
  return quote_data
}


// delete function  // In SQL it looks like: DELETE FROM users WHERE id = 2;
async function remove(id) {
  const deletedQuoteData = await db('quotes').where({ id: id }).del()
  return deletedQuoteData;
}


// // Update plant in DB. in SQL it looks like:
// // UPDATE plants
// // SET species = 'a', nickname = 'b', water_frequency = 'c'
// // WHERE id = 3;
async function updateById(id, quote_data) {
  await db('quotes').where({ id: id }).update(quote_data)
  return findById(id)
}


module.exports = {
  getAll,
  findById,
  create,
  remove,
  updateById
}





















// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@ NOTES BELOW @@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// const db = require('../../data/db-config') // Database connection // Knex

// module.exports = {
//     findById,
//     create,
//     getAll,
//     findBy,
//     remove,
//     updateById
// }


// function getAll() {
//     return db('plants')
// }


// function findBy(argFilter) {       // forgot what this was for......
//     // console.log(typeof argFilter)
//     return db('plants').where(argFilter).first();  // without first it needs to be an array at the end point
// }


// function findById(idArg) {
//     return db("plants").where({ id: idArg }).first();        // always .first when you want 1 thing
// }


// async function create(argTask) {
//     const [plant_data] = await db('plants').insert(argTask, ['*']); // This was different due to being Postgres
//     return plant_data
// }

// This was the SQLite version
// // // Add plant to DB
// // const add = async (plant) => {
// //     const [id] = await db('plants').returning('id').insert(plant)
// //     return findById(id)
// // }

// // delete function  // In SQL it looks like: DELETE FROM users WHERE id = 2;
// async function remove(id) {
//     const deletedPlantData = await db('plants').where({ id: id }).del()
//     return deletedPlantData;
// }


// // Update plant in DB. in SQL it looks like:
// // UPDATE plants
// // SET species = 'a', nickname = 'b', water_frequency = 'c'
// // WHERE id = 3;
// async function updateById(id, plant_data) {
//     await db('plants').where({ id: id }).update(plant_data)
//     return findById(id)
// }

















// ____________________________________________________________________





// connect DB after npm i and branch
// paste this into Keep into users/models
// paste old models in users/models
// use Thunder Client
// just get all data to show up in json

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@ NOTES @@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //



// // knex.select('id').from<User>('users'); // Resolves to Pick<User, "id">[]
// //  This helper function grabs all ID's and the router will match params and grab the clients ID. (added id as argument)
// // SELECT * FROM posts WHERE id = id; //  SQL version*
// // return db('posts').where({ id: id, foo: 'bar' }).first() //  Knex version*
// // .first() gets rid of nesting, (array in this case). Without first() we get an empty arr with bad code, first() gives us undefined.
// function getById(id) {
//   return db('posts').where('id', id).first() // Returns the post with the id.
// }



// // From notes:
// // SQL version* Note that single quotes are needed in SQL Light Studio because you cannot set it up in a function with args.
// // -- Create Title & Content
// // SQL version = INSERT INTO posts (title, contents) VALUES ('title', 'contents');
// // My failed version: = db('posts').insert({ title, contents })

// // Gabriel's debugging notes:
// // const stuff = await db('posts').insert({ title, contents }) // Inserts into table, returns id.
// // console.log(stuff) // [ 15 ] // Here we learned that this returns an array of the id.

// async function create({ title, contents }) {
//   const [id] = await db('posts').insert({ title, contents }) // Inserts into table, returns id.
//   console.log(id) // 15
//   const newPost = await getById(id)                          // Gets the new post.
//   console.log(newPost) // { id: 15, title: 'title', contents: 'contents' } AKA title: 'xxxx', contents: 'xxxx'
//   return newPost                                             // Returns the new post.
// }



// // UPDATE posts
// // SET title = 'hi', contents = 'words'
// // WHERE id = 1;

// // Knex Documentation:
// // knex('books')
// //   .where('published_date', '<', 2000)
// //   .update({
// //     status: 'archived',
// //     thisKeyIsSkipped: undefined
// //   })

// // Update/PUT needs an ID in the param inside of the HTTP client.
// // After the put req, you must do a get req to see data.

// async function update(id, { title, contents }) {
//   // return await db('posts').where({ id }).update({ title, contents })
//   const updatedPost = await db('posts').where('id', id).update({ title, contents }) // Inserts into table, returns id.
//   // console.log(updatedPost) // was named stuff. It returns: 1. If return 'foo'
//   return updatedPost
// }



// // DELETE FROM shippers WHERE shipperid = 5;

// function remove(id) {
//   return db('posts').where('id', id).del()
// }




// // ____________________ SQL NOTE's _________________________ //


// // How to comment in SQL:
// // -- 2 dashes!
// // The WHERE keyword is for a 'filter or a query'.
// // /* Use single quotes for strings */
// // /* String queries are case sensitive */
// // /* chaining 1 AND and a conditional */
// // /* OR also works, sorta like AND */

// // /* LIKE with the % operator grabs all any string that ends in land */
// // /* LIKE allows for case insensitivity */

// // /* NOT is a keyword, does what it says. Sorta like "!" in JavaScript. */

// // SELECT * FROM customers WHERE country LIKE 'ireland';


// // @@@@@@@@@@@ SELECT @@@@@@@@@@@@@@


// // -- How to grab all that do not contain a specific word in a paragraph.
// // -- LIKE allows for case insensitivity, % allows to search for the string regardless of what is in front or behind it.

// // SELECT * FROM employees
// // WHERE notes
// // NOT LIKE '%university%';


// // ______________________________________________


// // -- Grab all CategoryId's that have an integer of one.
// // SELECT * FROM products WHERE categoryid = 1;


// // _______________________________________________


// // -- Find all of the orders made after Jan 1 1997
// // SELECT * FROM orders WHERE orderDate > '1997-01-01';

// // -- I was stuck on this because I forgot "FROM" and the zeros in the date.


// // ****

// // -- ORDER BY oderdate ASC; makes the dates appear in order.

// // SELECT * FROM orders WHERE orderdate > '1997-01-01' ORDER BY oderdate ASC;


// // _______________________________________________


// // -- Get all products sorting them by category ascending, and then by price descending.

// // SELECT * FROM products
// // ORDER BY categoryid ASC, price DESC;

// // -- Interesting to note that WHERE was not needed, ORDER BY sufficed.
// // -- Also, "ASC" is not necessary since it is the default, but it adds clarity.


// // _______________________________________________





// // @@@@@@@@@@@@ INSERT aka create @@@@@@@@@@@@@


// // --INSERT INTO shippers (shippername, phone) VALUES ('acme 44', '(916) 500 9483');

// // insert into shippers (shippername, phone) values ('acme 44', '(909) 123 1234');

// // --SELECT * FROM shippers;


// // ***

// // -- Likely a W3Schools bug, buuut, would not work until I used case sensitivity with schema names. Like this:

// // -- insert into shippers (ShipperName, Phone) values ('acme 44', '(909) 123 1234');

// // select * from shippers; -- To check result.


// // -- And if you wanted to add just 1 property, it works unless it is a required field. It looks like this:

// // -- insert into shippers (ShipperName) values ('acme 44');



// // // // // // // Knex INSERT // // // // // // // // // //

// db('users').insert({ name: 'John' })

//  Also given as an example, but not sure why there is an array:
// .insert([
//   { name: 'Starsky' },
//   { name: 'Hutch' }
// ])

// knex('tableName')
  // .insert({
  //   email: "ignore@example.com",
  //   name: "John Doe"
  // })






// // ____________________________________________







// // @@@@@@@@@@@@@ UPDATE @@@@@@@@@@@@@


// // -- How to edit a table:

// // UPDATE shippers
// // SET shippername = 'webpt 31 is lit'
// // WHERE shipperid = 4;

// // --SELECT * FROM shippers;


// // ***

// // -- How to update multiple fields. Note, no trailing commas.

// // UPDATE posts
// // SET title = 'words', contents = 'more words'
// // WHERE id = 1;


// // @@@@@@@@@@@@ DELETE @@@@@@@@@@@@@


// // -- ID is the primary key. Any ID number that has been deleted cannot be used by any future ID numbers.
// // -- So we DELETE ID 2 then create a new one, the ID's are 1, 3, and so on.

// // -- How to delete:

// // DELETE FROM shippers WHERE shipperid = 5;


//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Even more notes?!


// function getAll() {
//     return db('quotes');
//   }

//   function findById(id) {
//   }

//   function add(quote) {
//   }

//   function update(changes, id) {
//   }

//   function remove(id) {
//   }



___________________________________________________



Inside api/server.js:


Add route:

    // Routes 
    const quotesRouter = require('./quotes/quotes-router');  // Create a meaningful variable name (dataRouter).


Add use:


    server.use('/quotes', quotesRouter); // We create the path name, we are free to use any name (/banana).


___________________________________________________



# Make sure this is the URL to use to see changes on Heroku, do not use localhost. 

- https://thestoics.herokuapp.com/quotes



___________________________________________________



Random sources: 

    https://github.com/AaronGabriel147/web-sprint-challenge-adding-data-persistence/blob/main/api/project/router.js


    https://github.com/AaronGabriel147/web-sprint-challenge-adding-data-persistence/blob/main/api/task/router.js


Stopping video @ 122:00 for the searching of notes:

    https://www.youtube.com/watch?v=jWuzmKY5joM&t=2581s












