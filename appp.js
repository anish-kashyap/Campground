var express=require("express");
var app=express();
var bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds=[
    {name: "Salmon Creek", image:"https://images.unsplash.com/photo-1528433556524-74e7e3bfa599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Anish Creek", image:"https://images.unsplash.com/photo-1530488562579-7c1dd2e6667b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "Manish Creek", image:"https://images.unsplash.com/photo-1564577160324-112d603f750f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 "},
    {name: "Lanish Creek", image:"https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 "},
    {name: "Harish Creek", image:"https://images.unsplash.com/photo-1542332213-1d277bf3d6c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 "}
];


app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds: campgrounds});
});


app.post("/campgrounds", function(req, res){
    //require data from new campgrounds form and update in the array
    var name=req.body.name;
    var image=req.body.image;
    var newcampground={name: name, image: image};
    campgrounds.push(newcampground);
    //redirect to campgrounds
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
})

app.listen(3000, function(){
    console.log("Server is live");
});