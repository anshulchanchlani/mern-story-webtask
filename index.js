// module.exports = function(cb){
//   cb(null,"Hello from Anshul's MERN story")
// }

var Express = require('express');
var Webtask = require('webtask-tools');
var bodyParser = require('body-parser')
var app = Express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(require('./middlewares/db').connectDisconnect);
require('./routes/stories')(app);

module.exports = Webtask.fromExpress(app);
