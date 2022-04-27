const express = require("express");
const router = express.Router();
const {signUp} = require("../controllers/AuthControllers");

//router.get('/allLocations', getLocations) ;
router.post('/signup', signUp) ;
module.exports = router;
