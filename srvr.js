let express = require('express');
let app = express();

var srvr = app.listen(3000, listening);

function listening(){

  console.log("listening ...");
}

app.use(express.static('site'));
