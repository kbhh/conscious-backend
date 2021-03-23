import mongoose from "mongoose";

class StudentPerformance {
    init() {
const dbSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "studentProfile"
  },
  eductionYear:Date,
  total:[{
    semsester:String,
    Score:Number,// total all courses score
  }], 
  rewards:[{ //May be we can make this using one collection
    type:String,
    enum:['Grade Rank','Competion'],
    description:String
  }],
 progress :[ {
    courseId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"},
      score: //100
      {
        semseter:String,
        score:Number
      },
    percent:{ type: String, default: 0 },//course level progress 
    
    test:[{
      semsester:String,
      testId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"},
      totalScore:Number,
      topicScore:[{ // this might be changed into competency level 
        topicId:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course"},
          topicScore:Number
      }]
    }],
    topic:[{
      topicId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SchoolCurriculum"}, 
      subtopic:[{
        subtopicId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"},
        workingPaths:[{
          wpId:{//Covered working paths by student
            type: mongoose.Schema.Types.ObjectId,
            ref: "WorkingPath"},
            cpScore:{
              hard:Number,
              meduim:Number,
              easy:Number
            },
            ir:[{//Item response 
              //Item response
              questionId :{
                type: mongoose.Schema.Types.ObjectId,
                ref: "SchoolCourseContent"},
                timeSpent:Number,
                result:Number // zero or 1 where 1 is correctly answered 
            }],
            pages:[{
              learningObject:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "WorkingPath"}
            }],
            percent:{ percent: Number},//working path percentage
            teacherFeedback:[
              {
                teacherId :{
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "User"},
                  feedback:String,
              }
            ],
            parentFeedback:[
              {
                parentId :{
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "User"},
                  feedback:String,
              }
            ],
          
          }],
      percent:{ percent: Number},//sub Topic coverage 
    
      teacherFeedback:[
        {
          teacherId :{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"},
            feedback:String,
        }
      ],
      parentFeedback:[
        {
          parentId :{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"},
            feedback:String,
        }
      ],
      app:[{
        appId:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "CourseApps"},
        percent:{ type: String, default: 0 }}],
      assignment:[{
          assignmentId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"},
            startDate:Date,     
            dueDate:Date,
            result: [],
          percent:{ type: String, default: 0 }}],
          testResult:[]
          
        },   
      ]
    }]
}],
}, { timestamps: true, collection: 'StudentPerformance' });
        
mongoose.model("StudentPerformance", schema);

}

getModel() {
this.init();
return mongoose.model("StudentPerformance");
}

}

export default StudentPerformance;