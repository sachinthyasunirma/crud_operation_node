const joi = require("joi");

//validate employee 
const validateEmployee = (employeeData) =>{
    const Schema = joi.object({
        first_name: joi.string().required().min(3),
        last_name: joi.string().required(),
        gender: joi.string().valid('draft','published')
    })
    return Schema.validateAsync(employeeData);
}

//validate employee id
const validateEmployeeId = (empId) =>{
    const Schema = joi.object({
        _id: joi.string().required()
    })
    return Schema.validateAsync(empId);
}

module.exports ={
    validateEmployee,
    validateEmployeeId
}