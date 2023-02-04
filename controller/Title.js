const titleModel = require("../models/Title");
const { validateTitle } = require("../validation/Title.validation");

const titleCreate = async (req, res) => {
  try {
    //save db
    const newSalary = await salaryModel.create({
      ...req.body,
    });
    //validate credentials
    await validateTitle(req.body);
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

const titleDelete = async (req, res) => {
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
    titleCreate,
    titleDelete,
};