var mongoose = require('mongoose');

const StorySchema = require('../models/Story')

module.exports ={
  connectDisconnect: (req,res,next) =>{

    const connection = mongoose.createConnection(req.webtaskContext.secrets.MONGO_URL);
    req.storyModel = connection.model('Story',StorySchema);
    req.on('end',()=>{
      mongoose.connection.close();
    })
    next()
  },
}
