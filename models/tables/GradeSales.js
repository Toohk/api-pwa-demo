const mongoose = require('mongoose');

const gradeSalesSchema = new mongoose.Schema({
    binder:{
        type: String,
        required: true,
        max: 50,
    },
    markets:{
        name:{
            type: String,
            required: true,
            max: 50,
        }
    }

    

});

module.exports = mongoose.model('Binder', binderSchema);