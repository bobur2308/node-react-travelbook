const router = require('express').Router();
const Travel = require('../models/travelModel')
const {
  getAllTravel,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook
} = require('../controllers/travelControllers')
// crud

router.get('/', getAllTravel)
router.post('/add',addTravelBook)
router.get('/:id', getTravelById);
router.put('/:id', updateTravelBook);
router.delete('/:id', removeTravelBook);


module.exports = router