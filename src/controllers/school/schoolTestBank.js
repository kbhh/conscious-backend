import Controller from "../common/Controller";
import UserService from "../../services/admin/systemAdminService"
import TestBank from "../../models/school/schoolTestBank"
import multer from "multer"
// import { imageValidator } from "../utils/validator"

const testBank = new TestBank().getModel()
const testBankService = new UserService(
    testBank
)
multer({dest: 'uploads'})

class schoolTestBank extends Controller{ 
    constructor(service) {
        super(service);
    } 
    
    async addGrade(req,res)
    {
        const result=await testBankService.addGrade(req);  
        res.status(result.statusCode).send(result);
    }
    async updateGrade(req,res)
    {
        const result=await testBankService.updateGrade(req);  
        res.status(result.statusCode).send(result);
    }


    async deleteGrade(req,res)
    {
        const result=await testBankService.deleteGrade(req);  
        res.status(result.statusCode).send(result);
    }
    async addSection(req,res)
    {
        const result=await testBankService.addSection(req);  
        res.status(result.statusCode).send(result);
    }
    async updateSection(req,res)
    {
        const result=await testBankService.updateSection(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteSection(req,res)
    {
        const result=await testBankService.deleteSection(req);  
        res.status(result.statusCode).send(result);
    }
    async addStudents(req,res)
    {
        const result=await testBankService.addStudents(req);  
        res.status(result.statusCode).send(result);
    }
    async updateStudents(req,res)
    {
        const result=await testBankService.updateStudents(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteStudents(req,res)
    {
        const result=await testBankService.deleteStudents(req);  
        res.status(result.statusCode).send(result);
    }

    async addCourses(req,res)
    {
        const result=await testBankService.addCourses(req);  
        res.status(result.statusCode).send(result);
    }

    async updateCourses(req,res)
    {
        const result=await testBankService.updateCourses(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteCourses(req,res)
    {
        const result=await testBankService.deleteCourses(req);  
        res.status(result.statusCode).send(result);
    }
    
    }
export default new schoolTestBank(testBankService)
