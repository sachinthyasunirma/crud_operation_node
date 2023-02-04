const express = require('express')
const router = express.Router()

//Import the Business Controller
const {
    titleCreate,
    titleDelete
} = require('')

/*
@Route - /create
@Desc  - Create title
@Params- None
@Access- Public
@Method- POST
*/
router.post('/create', titleCreate)

/* @Route - /delete
@Params- title_id
@Body  - 
@Access- Public
@Method- delete 
*/
router.put('/delete/:title_id', titleDelete)

module.exports = router