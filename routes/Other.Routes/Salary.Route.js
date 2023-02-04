const express = require('express')
const router = express.Router()

//Import the Business Controller
const {
    salaryCreate,
    salaryDelete
} = require('')

/*
@Route - /create
@Desc  - Create salary
@Params- None
@Access- Public
@Method- POST
*/
router.post('/create', salaryCreate)

/* @Route - /delete
@Params- salary_id
@Body  - 
@Access- Public
@Method- delete 
*/
router.delete('/delete/:salary_id', salaryDelete)

module.exports = router