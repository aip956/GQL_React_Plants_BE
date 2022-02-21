const mongoose = require('mongoose')
const PlantSchema = new mongoose.Schema({
    name: String,
    type: String,
    image: String
})
const Plant = mongoose.model('plant',PlantSchema);
module.exports = Plant;