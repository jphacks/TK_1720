var mysql = require("mysql");

var request = require('request');
var crypto = require('crypto');

var timestamp = Date.now().toString();

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
        res.json({"Message" : "NodeJS REST API Demo"});
    });

    //====================================
    //
    //             Operate Users
    //
    //====================================
    //create user, POST request
    router.post("/users/create",function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["users","email","password",req.body.email,md5(req.body.password)];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User created !"});
            }
        });
    });

    //show user list, GET request
    router.get("/users",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["users"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    //show specific user, GET request
    router.get("/users/:id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["users","id",req.params.id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    //update uses, PUT request
    router.put("/users",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["users","password",md5(req.body.password),"email",req.body.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
            }
        });
    });

    //delete users, DELETE request
    router.delete("/users/:email",function(req,res){
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["users","email",req.params.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.email});
            }
        });
    });

    //validate users by id and email, GET request
    router.get("/users/validate/:id/:email",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=? and ??=?";
        var table = ["users","email",req.params.email,"id", req.params.id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query!"});
            } else {
                if (rows=="") {
                    res.json({"Error" : true, "Message" : "User not exist!"});
                } else {
                    res.json({"Error" : true, "Message" : "OK", "token" : rows[0]["user_password"]});
                }
            }
        });
    });
}

module.exports = REST_ROUTER;
