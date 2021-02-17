const express = require("express");
const path = require("path")
require("./db/conn");
const User = require("./models/usermessage");
const hbs = require("hbs");
const { registerPartials } = require("hbs")


const app = express()
const port = process.env.port || 3000

//setting the path
const staticpath = path.join(__dirname , "../public");
const tamplatepath = path.join(__dirname , "../templates/views");
const partialspath = path.join(__dirname , "../templates/partials");

//middleware
app.use('/css' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")))
app.use('/js' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")))
app.use('/jq' , express.static(path.join(__dirname , "../node_modules/jquery/dist")))

app.use(express.urlencoded({extended : false}))
app.use(express.static(staticpath))
app.set("view engine" , "hbs")
app.set("views" , tamplatepath)
hbs.registerPartials(partialspath)

//routing
//app.get(path , callback)
app.get("/" , (req , res) => {
    res.render("index1");
})

app.get("/about" , (req , res) => {
    res.render("About");
})

app.get("/contact_us" , (req , res) => {
    res.render("Contact_Us");
})

app.get("/courses" , (req , res) => {
    res.render("Courses");
})

app.get("/courses1" , (req , res) => {
    res.render("Courses1");
})

app.get("/credentials" , (req , res) => {
    res.render("Credentials");
})

app.get("/py_ad" , (req , res) => {
    res.render("Data Science Advanced");
})

app.get("/py_bs" , (req , res) => {
    res.render("Data Science Basic");
})

app.get("/py_in" , (req , res) => {
    res.render("Data Science Intermediate");
})

app.get("/py" , (req , res) => {
    res.render("Data Science");
})

app.get("/index1" , (req , res) => {
    res.render("index1");
})

app.get("/r-ad" , (req , res) => {
    res.render("R Advanced");
})

app.get("/r-bs" , (req , res) => {
    res.render("R Basic");
})

app.get("/r-in" , (req , res) => {
    res.render("R Intermediate");
})

app.get("/r" , (req , res) => {
    res.render("R");
})

app.get("/spss-ad" , (req , res) => {
    res.render("SPSS Advanced");
})

app.get("/spss-bs" , (req , res) => {
    res.render("SPSS Basic");
})

app.get("/spss-in" , (req , res) => {
    res.render("SPSS Intermediate");
})

app.get("/spss" , (req , res) => {
    res.render("SPSS");
})

app.get("/reviews" , (req , res) => {
    res.render("Reviews");
})

app.get("/signin" , (req , res) => {
    res.render("index");
})

app.post("/contact" , async(req , res) => {
    try {
        //res.send(req.body);
        const userData = new User(req.body)
        await userData.save()
        res.status(201).render("index2");
    } catch (error) {
        res.status(500).send(error); 
    }
})

//server create
app.listen(port , () => {
    console.log(`Server is running at port no ${port}`);
})