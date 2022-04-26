// This file references 'knexfile.js'

const knex = require('knex');

const configs = require('../knexfile');

const env = process.env.NODE_ENV || 'development';

module.exports = knex(configs[env]);



// Another version looked like this:
// module.exports = knex(config.development);