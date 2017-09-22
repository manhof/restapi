/**
 * Module Dependencies
 */
const config  = require('./config'),
      restify = require('restify'),
      mysql      = require('mysql')


/**
 * Initialize Server
 */
const server = restify.createServer({
    name    : config.name,
    version : config.version,
    url : config.hostname
});

var connection = config.db.get;
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/*server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});*/

//rest api to get all results of changes
server.get('/names', function (req, res) {
   connection.query('select * from names', function (error, results, fields) {
          if (error) throw error;
          res.end(JSON.stringify(results));
        });
});
//rest api to get status of changes
server.get('/names/:Names', function (req, res) {
   connection.query("select * from names where names LIKE ?", ['%'+ req.params.names+ '%'],  function (error, results, fields) {
          if (error) throw error;
          res.end(JSON.stringify(results));
        });
});

server.get('/', function(req, res){
    console.log('Welcome Nodejs restify');
});

server.listen(8081, function () {
  console.log('%s listening at %s', server.name, server.url);
});
