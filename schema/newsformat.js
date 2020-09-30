const mongoose = require('mongoose');
const news_schema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
      url: {
        type: String,
        required : true,
    },
    comments:{
        type : String,
        required : true,
    },
    time: {
        type : Date,
        required : false,
        default: Date(),
    },
    sub: {
        type: Boolean,
        required :false,
        default:false,
    }
    
});
module.exports = mongoose.model('newsformat',news_schema);