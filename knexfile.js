require('dotenv').config()
const pg = require('pg')

if (process.env.DATABASE_URL) {
    pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
    client: 'pg',
    migrations: { directory: './data/migrations' },  // was api/data/...
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


