// require('dotenv').config();//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.api_url = process.env.API_URL || 'https://anywherecas.herokuapp.com'

// CONFIG.api_url = process.env.API_URL || 'http://192.168.1.9:3000'

module.exports = CONFIG;