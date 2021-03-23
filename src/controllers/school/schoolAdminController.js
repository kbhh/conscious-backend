import Controller from "../common/Controller";
import SchoolAdminService from "../../services/school/schoolAdminService"
import SchoolAdmin from "../../models/school/schoolAdmin"
import multer from "multer"
// import { imageValidator } from "../utils/validator"

const Account = new SchoolAdmin().getModel()
const schoolAdminService = new SchoolAdminService(
  Account
)
multer({ dest: 'uploads' })

class SchoolAdminController extends Controller {
  constructor(service) {
    super(service);
  }

  async signup(req, res) {
    const result = await schoolAdminService.signup(req.body);
    res.status(result.statusCode).send(result);
  }

  async resetAccount(req, res) {
    const result = await schoolAdminService.reset(req.body);
    res.status(result.statusCode).send(result);
  }

  async login(req, res) {
    const result = await schoolAdminService.login(req.body);
    res.status(result.statusCode).send(result);

  }

}

export default new SchoolAdminController(schoolAdminService)
