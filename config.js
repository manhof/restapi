'use strict'

var mysql = require('mysql');

module.exports = {
    name: 'rest-api',
    hostname : 'http://localhost',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        get : mysql.createConnection({
			host     : '35.196.144.107',
			user     : 'autocomplete',
			password : 'password',
			database : 'autocomplete'
		})
    }
}
