import Controller from "../common/Controller";
import UserService from "../../services/admin/systemAdminService"
import CourseContent from "../../models/school/schoolCourseContent"
import multer from "multer"
// import { imageValidator } from "../utils/validator"

const courseContent = new CourseContent().getModel()
const courseContentService = new UserService(
    courseContent
)
multer({dest: 'uploads'})

class schoolCourseContentController extends Controller{ 
    constructor(service) {
        super(service);
    }  
    
    }
export default new schoolCourseContentController(courseContentService)
