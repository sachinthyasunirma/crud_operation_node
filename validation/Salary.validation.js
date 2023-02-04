const joi = require("joi");

//validate salary 
const validateSalary = (salaryData) =>{
    const Schema = joi.object({
        salary: joi.string().required(),
    })
    return Schema.validateAsync(salaryData);
}

//validate salary id
const validateSalaryId = (salaryId) =>{
    const Schema = joi.object({
        _id: joi.string().required()
    })
    return Schema.validateAsync(salaryId);
}

module.exports ={
    validateSalary,
    validateSalaryId
}