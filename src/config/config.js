// require('dotenv').config();//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.api_url = process.env.API_URL || 'https://us-central1-anywhere-5cd4f.cloudfunctions.net/api'

module.exports = CONFIG;