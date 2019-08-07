const mongoose = require('mongoose');

const gradeChargesSchema = new mongoose.Schema({
    binder:{
        type: String,
        required: true,
        max: 50,
    },
    market:[{ 
        name:{
            type: String,
            required: true,
            max: 50,
        },
        line:[{
            volume:{
                number:{
                    type: Number,
                }
            },
            price:{
                number:{
                    type: Number,
                }
            },
        }]
        
    }]

});

module.exports = mongoose.model('GradeCharges', gradeChargesSchema);