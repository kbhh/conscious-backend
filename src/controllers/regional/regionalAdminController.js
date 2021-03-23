import Controller from "../common/Controller";
import RegionalAdminService from "../../services/regional/regionalAdminService"
import RegionalAdmin from "../../models/regional/regionalAdmin"
import multer from "multer"
// import { imageValidator } from "../utils/validator"

const Account = new RegionalAdmin().getModel()
const regionalAdminService = new RegionalAdminService(
  Account
)
multer({ dest: 'uploads' })

class RegionalAdminController extends Controller {
  constructor(service) {
    super(service);
  }

  async signup(req, res) {
    const result = await regionalAdminService.signup(req.body);
    res.status(result.statusCode).send(result);
  }

  async resetAccount(req, res) {
    const result = await regionalAdminService.reset(req.body);
    res.status(result.statusCode).send(result);
  }

  async login(req, res) {
    const result = await regionalAdminService.login(req.body);
    res.status(result.statusCode).send(result);

  }

}

export default new RegionalAdminController(regionalAdminService)
