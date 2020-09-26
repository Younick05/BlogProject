const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title:{
        type: String,
       
        
    },
    description:{
        type: String,
      
        
    },
    published:{
        type: Boolean,   
    },
    imageName:{
        type: String
    },
    imageData:{
        type: String
    }
});

userSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

const Tutorial = mongoose.model("Tutorial", userSchema)

module.exports = Tutorial;