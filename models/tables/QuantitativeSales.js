const mongoose = require('mongoose');

const quantitativeSalesSchema = new mongoose.Schema({
    binder:{
        type: String,
        required: true,
        max: 50,
    },
    type:{
        type: String,
        required: true,
    },
    market:[{ 
        name:{
            type: String,
            required: true,
            max: 50,
        },
        line:[{
            volume:{
                type: Number,
            },
            price:{
                type: Number,
            },
        }]
        
    }]

});

module.exports = mongoose.model('QuantitativeSales', quantitativeSalesSchema);