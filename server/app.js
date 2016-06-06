var http=require('http');
var helloWorldModule=require('../modules/helloWorldModule');
var goodbyeWorldModule=require('../modules/goodbyeWorld');
var multipleExports=require('../modules/multipleExports');

http.createServer( function( req, res ){
  console.log( 'hello world from server' );
  res.writeHead(200);
  res.write('hello world from server response...');
  res.write( responseFunction() );
  res.write( divideNumbers( 9, 3 ) );
  res.write( helloWorldModule() );
  res.write( goodbyeWorldModule() );
  res.write( multipleExports.genericMessage );
  res.write( multipleExports.multipleExportFunction() );
  res.end();
}).listen(8080);

var responseFunction = function(){
  console.log( 'in responseFunction' );
  return( ' and this is from the responseFunction... ' );
};

var divideNumbers = function( x, y ){
  return (x/y).toString();
};

console.log( 'server listening on 8080' );
