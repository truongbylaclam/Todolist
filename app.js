const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
var items = ["Buy Food", "Cook Food", "Eat Food"];
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res){
  var option = {weekday: 'long', year : 'numeric', month: 'long', day: 'numeric'};
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var time = hour + ":" + minute + ":" + second;
  var day = "";
  switch (today.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Error I supposed";
}
var date = today.toLocaleString("en-US", option);
res.render("list", {Day: date, Time: time, newListItems : items});
});

app.post('/', function(req, res){
  var item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

app.listen(3000, function (){
  console.log("App is started on port 3000");
})
