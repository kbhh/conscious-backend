import Controller from "../common/Controller";
import SchoolOfficialsService from "../../services/school/schoolOfficialsService"
import schoolOfficial from "../../models/school/schoolOfficial"
import multer from "multer"
// import { imageValidator } from "../utils/validator"

const Account = new schoolOfficial().getModel()
const schoolOfficialsService = new SchoolOfficialsService(
  Account
)
multer({ dest: 'uploads' })

class SchoolOfficialsController extends Controller {
  constructor(service) {
    super(service);
  }


  async signup(req, res) {
    const result = await schoolOfficialsService.signup(req.body);
    res.status(result.statusCode).send(result);
  }
  async resetAccount(req, res) {

    const result = await schoolOfficialsService.reset(req.body);
    res.status(result.statusCode).send(result);
  }
  async login(req, res) {
    const result = await schoolOfficialsService.login(req.body);
    res.status(result.statusCode).send(result);

  }
  async adminUserSignup(req,res)
  {
    //console.log(req)
    const result = await schoolOfficialsService.adminUserSignup(req)
    //res.status(result.statusCode).send(result);
  }

}
export default new SchoolOfficialsController(schoolOfficialsService)
