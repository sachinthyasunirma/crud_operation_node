const mongoose = require("mongoose");

/**
 * Salary Schema
 * emp_no
 * title
 * from_date
 * to_date
 * @attributes
 * 
*/

const TitleSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Types.ObjectId,
        ref: "Employees",
        required: [true, 'Please provide your Employee'],
    },
    title: {
        type: String,
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

const TitleModel = mongoose.model("Title", TitleSchema);

module.exports = TitleModel;