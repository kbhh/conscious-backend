import Controller from "../common/Controller";
import CourseContentService from "../../services/regional/CourseContentService"
import CourseContent from "../../models/regional/regionalCourseContent"
import multer from "multer"

const courseContent = new CourseContent().getModel()
const courseContentService = new CourseContentService(
  courseContent
)
multer({ dest: 'uploads' })

class regionalCourseContentController extends Controller {
  constructor(service) {
    super(service);
  }

  //my(mekonnen) updates here!
  async add(req, res) {
    const { id } = req.params;
    const { field } = req.query;
    const { chapterId, topicId,subTopicId, contentId, ...data } = req.body;
    let response;
    try {
      switch (field) {
        case 'chapter':
          response = await courseContentService.addSpecific({ _id: id }, { 'chapter': data });
          break;
        case 'topic':
          response = await courseContentService.addSpecific({ _id: id, 'chapter._id': chapterId }, { 'chapter.$.topic': data });
          break;
        case 'subTopic':
          response = await courseContentService.addSpecific({ _id: id }, { 'chapter.$[i].topic.$[j].subTopic': data }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }] });
          break;
        case 'content':
          response = await courseContentService.addSpecific({ _id: id }, { 'chapter.$[i].topic.$[j].subTopic.$[k].content': data }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }, { "k._id":subTopicId }] });
      }
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
    const { field } = req.query;
    const { chapterId, topicId, subTopicId, contentId } = req.body;
    const response = await courseContentService.getSpecific({ _id: id }, 'chapter');
    if (response.error == false) {
      switch (field) {
        case 'chapter':
          if (chapterId) {
            response.record = response.record.chapter.id(chapterId);
          }
          return res.status(response.statusCode).send(response);
        case 'topic':
          if (topicId) {
            response.record = response.record.chapter.id(chapterId).topic.id(topicId);
          } else {
            response.record = response.record.chapter.id(chapterId).topic;
          }
          return res.status(response.statusCode).send(response);
        case 'subTopic':
          if (subTopicId) {
            response.record = response.record.chapter.id(chapterId).topic.id(topicId).subTopic.id(subTopicId);
          } else {
            response.record = response.record.chapter.id(chapterId).topic.id(topicId).subTopic;
          }
          return res.status(response.statusCode).send(response);
        case 'content':
          if (contentId) {
            response.record = response.record.chapter.id(chapterId).topic.id(topicId).subTopic.id(subTopicId).content.id(contentId);
          } else {
            response.record = response.record.chapter.id(chapterId).topic.id(topicId).subTopic.id(subTopicId).content;
          }
          return res.status(response.statusCode).send(response);
      }
    }
    return res.status(response.statusCode).send(response);
  }

  async modify(req, res) {
    const { id } = req.params;
    const { field } = req.query;
    const { chapterId, topicId, subTopicId, contentId, ...data } = req.body;
    let response;
    try {
      switch (field) {
        case 'chapter':
          response = await courseContentService.updateBySet({ _id: id, 'chapter._id': chapterId }, { 'chapter.$.chaptetId': data.newChapterId });
          break;
        case 'topic':
          response = await courseContentService.updateBySet({ _id: id }, { 'chapter.$[i].topic.$[j].topicID': data.newTopicId }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }] });
          break;
        case 'subTopic':
          response = await courseContentService.updateBySet({ _id: id }, { 'chapter.$[i].topic.$[j].subTopic.$[k].subTopicId': data.newSubTopicId }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }, { "k._id": subTopicId }] });
          break;
        case 'content':
          response = await courseContentService.updateBySet({ _id: id }, { 'chapter.$[i].topic.$[j].subTopic.$[k].content.$[l]': data }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }, { "k._id": subTopicId }, { "l._id": contentId }] });
          break;
      }
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
    const { field } = req.query;
    const { chapterId, topicId, subTopicId, contentId } = req.body;
    let response;
    try {
      switch (field) {
        case 'chapter':
          response = await courseContentService.deleteByPull({ _id: id }, { 'chapter': { _id: chapterId } });
          break;
        case 'topic':
          response = await courseContentService.deleteByPull({ _id: id }, { 'chapter.$[i].topic': { _id: topicId } }, { arrayFilters: [{ "i._id": chapterId }] });
          break;
        case 'subTopic':
          response = await courseContentService.deleteByPull({ _id: id }, { 'chapter.$[i].topic.$[j].subTopic': { _id: subTopicId } }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }] });
          break;
        case 'content':
          response = await courseContentService.deleteByPull({ _id: id }, { 'chapter.$[i].topic.$[j].subTopic.$[k].content': { _id: contentId } }, { arrayFilters: [{ "i._id": chapterId }, { "j._id": topicId }, { "k._id": subTopicId }] });
          break;
      }
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
export default new regionalCourseContentController(courseContentService)
