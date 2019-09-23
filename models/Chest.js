const mongoose = require('mongoose');

const ChestSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        max: 255,
    },
    stock:{
        type:Object
    }
},
{ minimize: false });

module.exports = mongoose.model('Chest', ChestSchema);
