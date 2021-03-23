import Controller from "../common/Controller";
import SchoolClass from "../../models/school/schoolClasses"
import schoolClassService from "../../services/school/SchoolClassService";


const schoolClass = new SchoolClass().getModel()
const SchoolClassService = new schoolClassService(
    schoolClass
)

class SchoolClassController extends Controller{ 
    constructor(service) {
        super(service);
    }  
     
    
    async registerCourse(req,res)
    {
        const result=await SchoolClassService.registerCourse(req.body);  
        res.status(result.statusCode).send(result);
    }
    async addClass(req,res)
    {
        const result=await SchoolClassService.addClass(req);  
        res.status(result.statusCode).send(result);
    } 

    
    async updateClass(req,res)
    {
        const result=await SchoolClassService.updateClass(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteClass(req,res)
    {
        const result=await SchoolClassService.deleteClass(req);  
        res.status(result.statusCode).send(result);
    }
    async addSchoolClass(req,res)
    {
        const result = await SchoolClassService.insert({shift:req.body}); 
        res.status(result.statusCode).send(result);
    }

    // async addCourseMeta(req,res)
    // {
    //     const result=await SchoolClassService.addCourseMeta(req);  
    //     res.status(result.statusCode).send(result);
    // }
    async addSection(req,res)
    {
        const result = await SchoolClassService.addSection(req); 
        res.status(result.statusCode).send(result);
    }
        // async updateCourseMeta(req,res)
    // {
    //     req.body._id=req.body.id
    //     const result = await SchoolClassService.updateByCondition({_id:req.params.id,ward:{_id:req.body.id}}, {metadata:req.body}); 
    //     //const result = await SchoolClassService.update(req.params.id, {metadata:req.body}); 
    //     res.status(result.statusCode).send(result);
    // }
    async updateSection(req,res)
    {
        const result=await SchoolClassService.updateSection(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteSection(req,res)
    {
        const result=await SchoolClassService.deleteSection(req);  
        res.status(result.statusCode).send(result);
    }
    async addStudents(req,res)
    {
        const result=await SchoolClassService.addStudents(req);  
        res.status(result.statusCode).send(result);
    }
    async updateStudents(req,res)
    {
        const result=await SchoolClassService.updateStudents(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteStudents(req,res)
    {
        const result=await SchoolClassService.deleteStudents(req);  
        res.status(result.statusCode).send(result);
    }

    async addCourses(req,res)
    {
        const result=await SchoolClassService.addCourses(req);  
        res.status(result.statusCode).send(result);
    }
    // async addChapterMeta(req,res)
    // {
    //     //const result = await SchoolClassService.updateBySet(req.params.id, {chapters:{metadata:req.body}}); 
    //     const result=await SchoolClassService.addChapterMeta(req);  
    //     res.status(result.statusCode).send(result);
    // }

    async updateCourses(req,res)
    {
        const result=await SchoolClassService.updateCourses(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteCourses(req,res)
    {
        const result=await SchoolClassService.deleteCourses(req);  
        res.status(result.statusCode).send(result);
    }
    
    async addWorkingpaths(req,res)
    {
        const result=await SchoolClassService.addWorkingpaths(req);  
        res.status(result.statusCode).send(result);
    }

    async updateWorkingpaths(req,res)
    {
        const result=await SchoolClassService.updateWorkingpaths(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteWorkingpaths(req,res)
    {
        const result=await SchoolClassService.deleteWorkingpaths(req);  
        res.status(result.statusCode).send(result);
    }


    async addControlpoints(req,res)
    {
        const result=await SchoolClassService.addControlpoints(req);  
        res.status(result.statusCode).send(result);
    }

    async updateControlpoints(req,res)
    {
        const result=await SchoolClassService.updateControlpoints(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteControlpoints(req,res)
    {
        const result=await SchoolClassService.deleteControlpoints(req);  
        res.status(result.statusCode).send(result);
    }

    async addAssignments(req,res)
    {
        const result=await SchoolClassService.addAssignments(req);  
        res.status(result.statusCode).send(result);
    }

    async updateAssignments(req,res)
    {
        const result=await SchoolClassService.updateAssignments(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteAssignment(req,res)
    {
        const result=await SchoolClassService.deleteAssignment(req);  
        res.status(result.statusCode).send(result);
    }

    async addTeacher(req,res)
    {
        const result=await SchoolClassService.addTeacher(req);  
        res.status(result.statusCode).send(result);
    }

    async updateTeacher(req,res)
    {
        const result=await SchoolClassService.updateTeacher(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteTeacher(req,res)
    {
        const result=await SchoolClassService.deleteTeacher(req);  
        res.status(result.statusCode).send(result);
    }

    async addReward(req,res)
    {
        const result=await SchoolClassService.addReward(req);  
        res.status(result.statusCode).send(result);
    }

    async updateReward(req,res)
    {
        const result=await SchoolClassService.updateReward(req);  
        res.status(result.statusCode).send(result);
    }
    async deleteReward(req,res)
    {
        const result=await SchoolClassService.deleteReward(req);  
        res.status(result.statusCode).send(result);
    }
    
    }
export default new SchoolClassController(SchoolClassService)
