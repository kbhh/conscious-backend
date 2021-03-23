import mongoose from "mongoose";

import TimeAgo from 'javascript-time-ago'
// Load locale-specific relative date/time formatting rules.
import en from 'javascript-time-ago/locale/en'

javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'));
require('javascript-time-ago/intl-messageformat-global');
require('intl-messageformat/dist/locale-data/en');
const timeAgoEnglish = new javascriptTimeAgo('en-US');

class CourseType {
  init() {


    /**
     * TODO: Fix this
     */
    const messageSchema = new mongoose.Schema({
      messageforId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      message: {
        type: String,//System notification, personal email
        responses: [
          {
            responserId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User'
            },
            responserId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Message'
            },
            response: String
          }]

      },
      responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
      }],

    }, { timestamps: true });

    messageSchema.virtual('TimeAgo').get(function () {
      return en.format(new Date(this.createdAt));
    });
    mongoose.model("Message", schema);
  }



  getModel() {
    this.init();
    return mongoose.model("Message");
  }

}

export default Message;
