const employeeModel = require('../models/Employee')
const { validateEmployee, validateEmployeeId } = require('../validation/Employee.validation')

const employeeCreate = async (req, res) => {
    try {
        //validate credentials 
        await validateEmployee(req.body)

        //save db
        const newEmployee = await employeeModel.create({
            ...req.body,
        })
        //sucess 
        return res.status(201).json({
            status: "success"
        })

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

const employeeGetAll = async (req,res) =>{
    try {
        // find all employees 
        const employees = await employeeModel.find({});

        return res.status(200).json({
            data: employees,
            message: "success"
        })
    } catch (error) {
        return res.status(404).json({
            message: "Employees are not found"
        })
    }
}

const employeeEdit = async (req,res)=>{
    try {
        //param
        const {
            employee_id//employee Id
        } = req.params
        console.log(req.body);
        //validate employee id
        const valid = await validateEmployeeId({ _id: employee_id });

        //find by employee id
        const employee = await employeeModel.findByIdAndUpdate(employee_id, {...req.body})

        return res.status(200).json({
            data: employee,
            message: "success"
        })
    } catch (error) {
        return res.status(404).json({
            message: "Employee is not found"
        })
    }
}

module.exports= {
    employeeCreate,
    employeeEdit,
    employeeGetAll
}