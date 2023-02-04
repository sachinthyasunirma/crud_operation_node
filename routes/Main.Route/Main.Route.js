const express = require('express');
const router = express.Router();
/*
@Route - /employee
@Desc  - Employee Route
*/
const employeeRoute = require('../Other.Routes/Employee.Route');
router.use("/employe",employeeRoute);

/*
@Route - /salary
@Desc  - Salary Route 
*/
const salaryRoute = require('../Other.Routes/Salary.Route');
router.use("/salary",salaryRoute);

/*
@Route - /title
@Desc  - Titile Route 
*/
const titleRoute = require('../Other.Routes/Ttitle.Route');
router.use("/title",titleRoute);

module.exports = router;