const mongoose = require("mongoose");

/**
 * Employee Schema
 * birth_date
 * first_name
 * last_name
 * gender
 * hire_date
 * @attributes
 * 
*/

const EmployeeSchema = new mongoose.Schema({
    birth_date: {
        type: Date,
        required: [true, 'Please provide your birth_date'],
    },
    first_name: {
        type: String,
        required: [true, 'Please provide your first_name'],
    },
    last_name: {
        type: String,
        required: [true, 'Please provide your last_name'],
    },
    gender:{
        type: String,
        enum:["male","female"]
    },
    hire_date: {
        type: Date,
        default: Date.now()
    },
}, {
    timestamps: true
});

const EmployeeModel = mongoose.model("Employees", EmployeeSchema);

module.exports = EmployeeModel;