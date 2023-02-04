const express = require('express')
const router = express.Router()

//Import the Business Controller
const {
    employeeCreate,
    employeeEdit,
    employeeGetAll
} = require('../../controller/Employee')

/*
@Route - /create
@Desc  - Create Employee 
@Params- None
@Access- Public
@Method- POST
*/
router.post('/create', employeeCreate)

/*
@Route - /get/all
@Desc  - Get Employees
@Params- None
@Access- Public
@Method- Get
*/
router.get('/get/all', employeeGetAll)

/* @Route - /update
@Params- employee_id
@Body  - 
@Access- Public
@Method- PUT 
*/
router.put('/edit/:employee_id', employeeEdit)

module.exports = router