const express = require('express');
const User = require('../src/models/users')
const bcrypt = require('bcrypt');

exports.getMainPage= (req, res, next) => {
    username=req.body;
    res.render('index',{username:username});
};

exports.getSignupForm = (req, res, next) => {
    // console.log("sayali hello");

    // console.log("login" + usernameGlobal);    
    // res.render('filesignup',{path:'/singup'});

    res.render('filelogin', { path: '/login', user: req.user, verified: true, regiseter: false });
    // res.render('Hello Sayali');
};
exports.getLogIn = async function (req, res, next) {
    var userFind = false;
    // console.log(req.body);
    var { userlogin, password } = req.body;
    if (userlogin == "" || userlogin == null || typeof userlogin == undefined) {
        res.render("filelogin", { userlogin: req.body.userlogin, ErrorMessage: 'Enter UserLogin or Mobile!', verified: true, cartItemCount: 0, regiseter: false });

    } else {
        if (password == "" || password == null || typeof password == undefined) {
            res.render("filelogin", { userlogin: req.body.userlogin, ErrorMessage: 'Enter Password!', verified: true, cartItemCount: 0, regiseter: false });

        } else {
            // console.log('user found');
            // let userdata=await User.find();
            
            
            // console.log(userdata);
            User.findOne({
                $or: [
                    { 'userlogin': userlogin },
                    { 'mobile': userlogin }
                ]
            })
                .then(userInDB => {
                    // console.log(userInDB);
                    if (userInDB == null) {
                        
                        userFind = false;
                    } else {
                        // console.log(password,userInDB.password);
                        if(password==userInDB.password){
                           console.log('password match') 
                            var coutQty = 0;

                            
                            // res.redirect('/');
                            res.render('index',{username:userInDB.username});
                    
                        }else{
                            res.render("filelogin", { userlogin: userlogin, ErrorMessage: 'Login or Password wrong!', verified: true, regiseter: false });
                            console.log('Login or Password Wrong');
            
                        }
            
            

                    }

                })
                .catch(err => {
                    userFind = false;
                    return res.render("filelogin", { username: userlogin, ErrorMessage: 'Login or Password wrong!', verified: true, cartItemCount: 0 });
                    console.log(err + 'Login or Password Wrong');
                });
        }
    }

}