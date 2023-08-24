const express = require("express")
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))

//setting static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + "public/css"))
app.use('/img', express.static(__dirname + "public/img"))
app.use('/js', express.static(__dirname + "public/js"))

// setting views engin
app.set('views', './src/views');
app.set('view engine', 'ejs');

//setting router
const newsRouter = require("./src/routes/news");
app.use('/', newsRouter);





// app listtning at port
app.listen(3000, () => {
    console.log("app is running at port 3000....")
})