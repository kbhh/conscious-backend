import Controller from "../common/Controller";
import curriculumService from "../../services/regional/CurriculumService"
import Curriculum from "../../models/regional/regionalCurriculum"


const curriculum = new Curriculum().getModel()
const CurriculumService = new curriculumService(
  curriculum
)

class CurriculumController extends Controller {
  constructor(service) {
    super(service);
  }

  async add(req, res) {
    const id = req.params.id;
    const { field } = req.query;
    const { chapterId, topicId, subTopicId, ...data } = req.body;
    if (field) {
      let response;
      switch (field) {
        case 'metadata':
          response = await CurriculumService.addSpecific({ _id: id }, { 'metadata': data });
          break;
        case 'reference':
          response = await CurriculumService.addSpecific({ _id: id }, { 'reference': data });
          break;
        case 'chapter':
          response = await CurriculumService.addSpecific({ _id: id }, { 'chapters': data });
          break;
        case 'chaptermeta':
          response = await CurriculumService.addSpecific({ _id: id, 'chapters._id': chapterId }, { 'chapters.$.metadata': data });
          break;
        case 'topic':
          response = await CurriculumService.addSpecific({ _id: id, 'chapters._id': chapterId }, { 'chapters.$.topic': data });
          break;
        case 'subTopic':
          response = await CurriculumService.addSpecific({ _id: id, 'chapters._id': chapterId, 'chapters.topic._id': topicId }, 
          { 'chapters.$[i].topic.$[j].subTopic': data }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }] });
          break;
        case 'topicMeta':
          response = await CurriculumService.addSpecific({ _id: id, 'chapters._id': chapterId, 'chapters.topic._id': topicId }, { 'chapters.$[i].topic.$[j].metadata': data }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }] });
          break;
        case 'subTopicMetadata':
          response = await CurriculumService.addSpecific({ _id: id, 'chapters._id': chapterId, 'chapters.topic._id': topicId,'chapters.topic.subTopic._id': subTopicId }, { 'chapters.$[i].topic.$[j].subTopic.$[k].metadata': data }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }, { "k._id": subTopicId }] });
          break;
        default:
          response =
          {
            statusCode: 200,
            error: true,
            message: 'Please select the item to be added'
          }
          break;
      }
      return res.status(response.statusCode).send(response);
    }
    else {
      return res.status(200).send({ error: true, message: "Please insert all mandatory fields" });
    }
  }
  async get(req, res) {
    const id = req.params.id;
    const { field, metadataId, referenceId, chapterId, topicId, subTopicId, topicMetadataId, subTopicMetadataId } = req.query;
    if (field) {
      //let response;
      let param;
      let filter;
      switch (field) {
        case 'course':
          param = { _id: id }
          break;
        case 'metadata':
          param = { _id: id, 'metadata._id': metadataId }
          filter = { 'metadata.$': 1 }
          break;
        case 'reference':
          param = { _id: id, 'reference._id': referenceId }
          filter = { 'reference.$': 1 }
          break;
        case 'chapter':
          param = { _id: id, 'chapters._id': chapterId }
          filter = { 'chapters.$': 1 }
          break;
        case 'topic':
          param = { _id: id, 'chapters._id': chapterId, 'chapters.topic._id': topicId }
          filter = { 'chapters.$': 1 }
          break;
        default:
          let response =
          {
            statusCode: 200,
            error: true,
            message: 'Please select the item to be added'
          }
          return res.status(response.statusCode).send(response);
          break;

      }
      let response = await CurriculumService.getSpecific(param, filter);
      return res.status(response.statusCode).send(response);
    }
    else {
      return res.status(200).send({ error: true, message: "Please insert all mandatory fields" });
    }
  }

  async modify(req, res) {
    const id = req.params.id;
    const { field } = req.query;
    const { chapterId, topicId, subTopicId, metadataId, referenceId, chapterMetadataId, chapterReferenceId,
      topicMetadataId, subTopicMetadataId, ...data } = req.body;
    let response;
    if (field) {
      switch (field) {
        case 'metadata':
          response = await CurriculumService.updateBySet({ _id: id, 'metadata._id': metadataId }, { 'metadata.$': data });
          break;
        case 'reference':
          response = await CurriculumService.updateBySet({ _id: id, 'reference._id': referenceId }, { 'reference.$': data });
          break;
        case 'chapter':
          response = await CurriculumService.updateBySet({ _id: id, 'chapters._id': chapterId },
            {
              'chapters.$.chapterName': req.body.chapterName,
              'chapters.$.chapterSequence': req.body.chapterSequence
            });
          break;
        case 'chapterMetadata':
          response = await CurriculumService.updateBySet({ _id: id },
            { 'chapters.$[i].metadata.$[j]': data },
            { arrayFilters: [{ "i._id": chapterId }, { "j._id": chapterMetadataId }] });
          break;
        case 'chapterReference':
          response = await CurriculumService.updateBySet({ _id: id },
            { 'chapters.$[i].reference.$[j]': data }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": chapterReferenceId }] });
          break;
        case 'topic':
          response = await CurriculumService.updateBySet({ _id: id },
            { 'chapters.$[i].topic.$[j].topicName': data.topicName, 'chapters.$[i].topic.$[j].topicSequence': data.topicSequence },
            { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }] });
          break;
        case 'topicMeta':
          response = await CurriculumService.updateBySet({ _id: id },
            { 'chapters.$[i].topic.$[j].metadata.$[k]': data },
            { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }, { "k._id": topicMetadataId }] });
          break;
        case 'subTopic':
          response = await CurriculumService.updateBySet({ _id: id }, 
            { 'chapters.$[i].topic.$[j].subTopic.$[k].subTopicName': data.subTopicName, 'chapters.$[i].topic.$[j].subTopic.$[k].subTopicSequence': data.subTopicSequence }, 
            { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }, { "k._id": subTopicId }] });
          break;
        case 'subTopicMetadata':
          response = await CurriculumService.updateBySet({ _id: id }, 
            { 'chapters.$[i].topic.$[j].subTopic.$[k].metadata.$[l]': data }, 
            { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }, { "k._id": subTopicId }, { "l._id": subTopicMetadataId }] });
          break;
        default:
          response =
          {
            statusCode: 200,
            error: true,
            message: 'Please select the item to be modified'
          }
          break;
      }
      return res.status(response.statusCode).send(response);
    }
    else {
      return res.status(200).send({ error: true, message: "Please insert all mandatory fields" });
    }

  }

  async remove(req, res) {
    const id = req.params.id;
    const { field } = req.query
    const { chapterId, topicId, subTopicId, metadataId, referenceId, chapterMetadataId, chapterReferenceId,
      topicMetadataId, subTopicMetadataId } = req.body;
    let response;
    if (field) {
      switch (field) {
        case 'metadata':
          response = await CurriculumService.deleteByPull({ _id: id, 'metadata._id': metadataId }, { 'metadata': { _id: metadataId } });
          break;
        case 'reference':
          response = await CurriculumService.deleteByPull({ _id: id, 'reference._id': referenceId }, { 'reference': { _id: referenceId } });
          break;
        case 'chapter':
          response = await CurriculumService.deleteByPull({ _id: id, 'chapters._id': chapterId }, { 'chapters': { _id: chapterId } });
          break;
        case 'chapterMetadata':
          console.log(chapterMetadataId + ' ' + chapterId)
          response = await CurriculumService.deleteByPull({ _id: id },
            { 'chapters.$[i].metadata': { _id: chapterMetadataId } },
            { arrayFilters: [{ "i._id": chapterId }] });
          break;
        case 'chapterReference':
          response = await CurriculumService.deleteByPull({ _id: id },
            { 'chapters.$[i].reference': { _id: chapterReferenceId } }, { arrayFilters: [{ "i._id": chapterId }] });
          break;
        case 'topic':
          response = await CurriculumService.deleteByPull({ _id: id },
            { 'chapters.$[i].topic': { _id: topicId } },
            { arrayFilters: [{ "i._id": chapterId }] });
          break;
        case 'topicMetadata':
          response = await CurriculumService.deleteByPull({ _id: id },
            { 'chapters.$[i].topic.$[j].metadata': { _id: topicMetadataId } },
            { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }] });
          break;
        case 'subTopic':
          response = await CurriculumService.deleteByPull({ _id: id },
            { 'chapters.$[i].topic.$[j].subTopic': { _id: subTopicId } },
            { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }] });
          break;
        case 'subTopicMetadata':
          response = await CurriculumService.deleteByPull({ _id: id },
            { 'chapters.$[i].topic.$[j].subTopic.$[k].metadata': { _id: subTopicMetadataId } },
            { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }, { "k._id": subTopicId }] });
          break;
        default:
          response =
          {
            statusCode: 200,
            error: true,
            message: 'Please select the item to be removed'
          }
          break;
      }
      return res.status(response.statusCode).send(response);
    }
    else {
      return res.status(200).send({ error: true, message: "Please insert all mandatory fields" });
    }
  }
  async registerCourse(req, res) {
    const result = await CurriculumService.registerCourse(req.body);
    res.status(result.statusCode).send(result);
  }

}
export default new CurriculumController(CurriculumService)
