const salaryModel = require("../models/Salary");
const { validateSalary } = require("../validation/Salary.validation");

const salaryCreate = async (req, res) => {
  try {
    //validate credentials
    await validateSalary(req.body);

    //save db
    const newSalary = await salaryModel.create({
      ...req.body,
    });
    //sucess
    return res.status(201).json({
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const salaryDelete = async (req, res) => {
    try{
        const{
            salary_id
        }=req.body
        await salaryModel.findByIdAndDelete({salary_id})
        return res.json({
            message:"sucessfully delete salary"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
};

module.exports = {
  salaryCreate,
  salaryDelete,
};
