import Controller from "../common/Controller";
import competitionService from "../../services/school/CompetitionService"
import Competition from "../../models/school/competition"


const competition = new Competition().getModel()
const CompetitionService = new competitionService(
    competition
)

class CompetitionController extends Controller{ 
    constructor(service) {
        super(service);
    }  
     
    async addAcademicYear(req,res)
    {
        const result=await CompetitionService.addAcademicYear(req);  
        res.status(result.statusCode).send(result);
    }
    async addGrade(req,res)
    {
        const result=await CompetitionService.addGrade(req);  
        res.status(result.statusCode).send(result);
    }

    async updateGrade(req,res)
    {
        const result=await CompetitionService.updateGrade(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteGrade(req,res)
    {
        const result=await CompetitionService.deleteGrade(req);  
        res.status(result.statusCode).send(result);
    }
    async addSection(req,res)
    {
        const result=await CompetitionService.addSection(req);  
        res.status(result.statusCode).send(result);
    }
    async updateSection(req,res)
    {
        const result=await CompetitionService.updateSection(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteSection(req,res)
    {
        const result=await CompetitionService.deleteSection(req);  
        res.status(result.statusCode).send(result);
    }
    async addStudents(req,res)
    {
        const result=await CompetitionService.addStudents(req);  
        res.status(result.statusCode).send(result);
    }
    async updateStudents(req,res)
    {
        const result=await CompetitionService.updateStudents(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteStudents(req,res)
    {
        const result=await CompetitionService.deleteStudents(req);  
        res.status(result.statusCode).send(result);
    }

    async addCourses(req,res)
    {
        const result=await CompetitionService.addCourses(req);  
        res.status(result.statusCode).send(result);
    }

    async updateCourses(req,res)
    {
        const result=await CompetitionService.updateCourses(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteCourses(req,res)
    {
        const result=await CompetitionService.deleteCourses(req);  
        res.status(result.statusCode).send(result);
    }

    async addMarkSetting(req,res)
    {
        const result=await CompetitionService.addMarkSetting(req);  
        res.status(result.statusCode).send(result);
    }

    async updateMarkSetting(req,res)
    {
        const result=await CompetitionService.updateMarkSetting(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteMarkSetting(req,res)
    {
        const result=await CompetitionService.deleteMarkSetting(req);  
        res.status(result.statusCode).send(result);
    }

    async addTest(req,res)
    {
        const result=await CompetitionService.addTest(req);  
        res.status(result.statusCode).send(result);
    }

    async updateTest(req,res)
    {
        const result=await CompetitionService.updateTest(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteTest(req,res)
    {
        const result=await CompetitionService.deleteTest(req);  
        res.status(result.statusCode).send(result);
    }
    
    async addReward(req,res)
    {
        const result=await CompetitionService.addReward(req);  
        res.status(result.statusCode).send(result);
    }

    async updateReward(req,res)
    {
        const result=await CompetitionService.updateReward(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteReward(req,res)
    {
        const result=await CompetitionService.deleteReward(req);  
        res.status(result.statusCode).send(result);
    }


  

    }
export default new CompetitionController(CompetitionService)
