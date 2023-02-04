const express = require('express');
const router = express.Router();
/*
@Route - /employee
@Desc  - Employee Route
*/
const employeeRoute = require();
router.use("/question",questionRoute);

/*
@Route - /category
@Desc  - Category Route 
*/
const categoryRoute = require('../Other.Route/Category/Category.Route');
router.use("/category",categoryRoute);

module.exports = router;