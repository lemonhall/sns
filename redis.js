var redis = require("redis"),
    client = redis.createClient();

    // if you'd like to select database 3, instead of 0 (default), call
    // client.select(3, function() { /* ... */ });

client.on("error", function (err) {
        console.log("Error " + err);
});

client.select(0,function(err,res){

    if(!err){
        console.log("successs....user database 5....in redis");
    }else{
        console.log(err);
        exit(0);
    }
});


