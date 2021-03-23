import mongoose from "mongoose";

class CurriculumYear {
    init() {
        const CourseSchema = new mongoose.Schema({
            curriculumYear: Date,
            description:String
        }, { timestamps: true, collection: 'CurriculumYear' });
                
        mongoose.model("CurriculumYear", schema);
    
    }


    getModel() {
    this.init();
    return mongoose.model("CurriculumYear");
    }

}

export default CurriculumYear;
