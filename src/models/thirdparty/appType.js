import mongoose from "mongoose";

class AppType {
    init() {
        const dbSchema = new mongoose.Schema({
            appType: String,
        }, { timestamps: true, collection: 'AppType' });
                
        mongoose.model("AppType", schema);
        
        }
        

    getModel() {
    this.init();
    return mongoose.model("AppType");
    }

}

export default AppType;