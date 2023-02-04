const mongoose = require("mongoose");

/**
 * Salary Schema
 * emp_no
 * salary
 * from_date
 * to_date
 * @attributes
 * 
*/

const SalarySchema = new mongoose.Schema({
    employee: {
        type: mongoose.Types.ObjectId,
        ref: "Employees",
        required: [true, 'Please provide your Employee'],
    },
    salary: {
        type: Number,
        required: [true, 'Please provide your first_name'],
    },
    from_date: {
        type: Date,
    },
    to_date:{
        type: Date,
    },
}, {
    timestamps: true
});

const SalaryModel = mongoose.model("Salaries", SalarySchema);

module.exports = SalaryModel;