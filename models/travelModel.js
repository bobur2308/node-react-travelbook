const {Schema,model} = require('mongoose')

const travelModel = new Schema({
  title:{
    type:String,
    reuqired:true,
    minlength:3
  },
  image:{
    type:String,
    reuqired:true
  },
  descr:{
    type:String,
    reuqired:true
  }
})

module.exports = model('Travel',travelModel)