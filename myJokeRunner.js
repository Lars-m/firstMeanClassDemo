var jokes = require("./model/jokes");
var connection = require("./db/db");

connection.connect("mongodb://localhost:27017/test",function(){
    jokes.allJokes(function(err,data){
        if(err){
            console.log("Upppps");
        }
        else{
            console.log(data);
        }
    });

});

