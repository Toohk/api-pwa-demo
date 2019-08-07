const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 50,
       
    },
    user:{
        type: String,
        required: true,
        max: 255,
    }

});

module.exports = mongoose.model('Folder', folderSchema);