import Controller from "../common/Controller";
import SystemAdminService from "../../services/admin/systemAdminService"
import SystemAdmin from "../../models/admin/systemAdmin"
import multer from "multer"

const Account = new SystemAdmin().getModel()
const systemAdminService = new SystemAdminService(
  Account
);

multer({ dest: 'uploads' })

class SystemAdminController extends Controller {
  constructor(service) {
    super(service);
  }

  async signup(req, res) {
    const result = await systemAdminService.signup(req.body);
    res.status(result.statusCode).send(result);
  }

  async login(req, res) {
    const result = await systemAdminService.login(req.body);
    res.status(result.statusCode).send(result);
  }

}

export default new SystemAdminController(systemAdminService)
