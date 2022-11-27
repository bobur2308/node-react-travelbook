const Travel = require('../models/travelModel')
// method -get, descr-getalltravelbook
const getAllTravel = async(req,res)=>{
  try {
    const travels = await Travel.find()
    return res.status(200).json({
      message:'succes',
      travels:travels.reverse()
    })
    
  } catch (err) {
    res.send(err)
  }
}

const getTravelById = async (req,res)=>{
  try {
    const travel = await Travel.findById(req.params.id)
    
    if(!travel){
      return res.status(404).json({
        message:"Not Found"
      })
    }
    return res.status(200).json({
      message:'succes',
      travel
    })
  } catch (err) {
    res.send(err)
  }
}

// Method - POST
// Descr = add new
const addTravelBook = async(req,res)=>{
  try {
    const {title,image,descr} = req.body
    const newTravel = await Travel.create({
      title,
      image,
      descr
    })
    res.status(201).json({
      message:"Succes",
      newTravel
    })
  } catch (err) {
    res.send(err)
  }
}

// method-put
// edit trabelbook by its id
const updateTravelBook = async(req,res)=>{
  try {
    const {title,image,descr} = req.body
    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id,{
      title,
      image,
      descr
    })
    res.status(200).json({
      message:"Succes",
      updatedTravel
    })
  } catch (err) {
    res.send(err)
  }
}


const removeTravelBook = async(req,res)=>{
  try {
    await Travel.findByIdAndRemove(req.params.id)
    res.status(200).json({
      message:"Deleted"
    })
  } catch (err) {
    res.send(err)
  }
}

module.exports = {
  getAllTravel,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook
}