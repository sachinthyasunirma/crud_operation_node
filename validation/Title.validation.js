const joi = require("joi");

//validate title 
const validateTitle = (titleData) =>{
    const Schema = joi.object({
        title: joi.string().required(),
    })
    return Schema.validateAsync(titleData);
}

//validate title id
const validateTitleId = (titleId) =>{
    const Schema = joi.object({
        _id: joi.string().required()
    })
    return Schema.validateAsync(titleId);
}

module.exports ={
    validateTitle,
    validateTitleId
}