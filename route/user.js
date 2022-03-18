const express=require('express');
const path=require('path');
const router=express.Router();
// const router = require('express').Router();

const userController=require('../controllers/user');
// const userController=require('../controllers/user');

router.get('/',userController.getMainPage);


router.get('/login',userController.getSignupForm);
router.post('/login',userController.getLogIn);

module.exports = router;
