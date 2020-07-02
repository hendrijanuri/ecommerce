const express = require('express');
const router = express.Router();

// controllers
const { requireSignin, isAuth } = require('../controllers/auth')
const { userById } = require('../controllers/user');
const { generateToken } = require('../controllers/braintree');

// Routes
router.get('/braintree/getToken/:userId', requireSignin, isAuth, generateToken);

router.param("userId", userById);

module.exports = router