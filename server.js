var StaticServer = require('static-server');

var server = new StaticServer({
  rootPath:"./dist/",
  // hostname: "127.0.0.1",

  port:8000

});

server.start(function(){
  console.log("fucking active", server.port);
});