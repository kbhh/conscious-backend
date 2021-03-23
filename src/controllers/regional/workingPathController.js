import Controller from "../common/Controller";
import WorkingPathService from "../../services/regional/CourseContentService"
import WorkingPath from "../../models/regional/workingPath"

const workingPath = new WorkingPath().getModel()
const workingPathService = new WorkingPathService(
  workingPath
);

class WorkingPathController extends Controller {
  constructor(service) {
    super(service);
  }

  //my(mekonnen) updates here!
  async add(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      let response = await workingPathService.addSpecific({ _id: id }, { 'workingPaths': data });
      return res.status(response.statusCode).send(response);
    } catch (error) {
      return {
        err: true,
        statusCode: 500,
        error
      };
    }
  }

  async get(req, res) {
    const { id } = req.params;
    const { workingPathId } = req.body;
    const response = await workingPathService.getSpecific({ _id: id }, 'workingPaths');
    if (response.error == false) {
      if (workingPathId) {
        response.record = response.record.workingPaths.id(workingPathId);
      }
      return res.status(response.statusCode).send(response);
    }
    return res.status(response.statusCode).send(response);
  }

  async modify(req, res) {
    const { id } = req.params;
    const { workingPathId, ...data } = req.body;
    try {

      response = await courseContentService.updateBySet({ _id: id, 'workingPaths._id': workingPathId }, { 'chapter.$': data });
      return res.status(response.statusCode).send(response);
    } catch (error) {
      return {
        err: true,
        statusCode: 500,
        error
      };
    }
  }

  async remove(req, res) {
    const { id } = req.params;
    const { workingPathId } = req.body;
    let response;
    try {
      response = await courseContentService.deleteByPull({ _id: id }, { 'workingPaths': { _id: workingPathId } });
      return res.status(response.statusCode).send(response);
    } catch (error) {
      return {
        err: true,
        statusCode: 500,
        error
      };
    }
  }

}

export default new WorkingPathController(workingPathService);