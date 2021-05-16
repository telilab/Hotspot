const http = require('http')

const port = process.env.PORT || 5000

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', "test/plain");
  response.end('Hell csc 3221 world, you are the best');

} );

server.listen(port, (err) => {
  if(err){
    return console.log('Something is wrong, shut to light...');
  }
  console.log(`Server Listening on ${port}`);
});
