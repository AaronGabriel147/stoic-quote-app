
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
