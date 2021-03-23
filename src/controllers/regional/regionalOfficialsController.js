import Controller from "../common/Controller";
import RegionalOfficialsService from "../../services/regional/regionalOfficialsService"
import regionalEdOfficial from "../../models/regional/regionalEdOfficial"
import multer from "multer"
// import { imageValidator } from "../utils/validator"

const Account = new regionalEdOfficial().getModel()
const regionalOfficialsService = new RegionalOfficialsService(
  Account
)
multer({ dest: 'uploads' })

class RegionalOfficialsController extends Controller {
  constructor(service) {
    super(service);
  }


  async signup(req, res) {
    const result = await regionalOfficialsService.signup(req.body);
    res.status(result.statusCode).send(result);
  }
  async resetAccount(req, res) {

    const result = await regionalOfficialsService.reset(req.body);
    res.status(result.statusCode).send(result);
  }
  async login(req, res) {
    const result = await regionalOfficialsService.login(req.body);
    res.status(result.statusCode).send(result);

  }
  async adminUserSignup(req, res) {
    const result = await regionalOfficialsService.adminUserSignup(req)
  }
  async uploadProfileImg(req, res, next) {
    const result = await regionalOfficialsService.imageUpload(req, res, next);
  }
  async updateProfileImg(req, res) {
    // console.log(req.body.profileImg)
    const result = await regionalOfficialsService.update(req.id, req.body);
    res.status(result.statusCode).send(result);
  }

}
export default new RegionalOfficialsController(regionalOfficialsService)
