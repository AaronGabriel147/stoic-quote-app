require('dotenv').config()
const pg = require('pg')

if (process.env.DATABASE_URL) {
    pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
    client: 'pg',
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: process.env.DEV_DATABASE_URL,
    },
    test: {
        ...sharedConfig,
        connection: process.env.TESTING_DATABASE_URL,
    },
    production: {
        ...sharedConfig,
        connection: process.env.DATABASE_URL,
        pool: { min: 2, max: 10 },
    },
}





// ============================================================

// Delete this below, it was from scribble Stadium to see alternate was of knex files*

// module.exports = {
//     development: {
//         client: 'pg',
//         connection: process.env.DATABASE_URL,
//         migrations: { directory: '/data/migrations' },
//         seeds: { directory: '/data/seeds' },
//         pool: {
//             min: 2,
//             max: 10,
//         },
//     },

//     test: {
        // client: 'pg',
        // connection: process.env.DATABASE_URL,
        // migrations: { directory: '/data/migrations' },
        // seeds: { directory: '/data/seeds' },
//     },

//     production: {
//         client: 'pg',
//         connection: {
//             connectionString: process.env.DATABASE_URL,
//             ssl: true,
//         },
//         migrations: { directory: '/data/migrations' },
//         seeds: { directory: '/data/seeds' },
//     },
// };










// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

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


