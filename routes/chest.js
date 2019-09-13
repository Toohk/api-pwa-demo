const router = require('express').Router();
const Chest = require('../models/Chest');
const verify = require('./verifyToken')

router.get('/get', verify, async (req,res) => {
    const chest = await Chest.find({user: userId });
    res.json({chest})
}),

router.put('/update', (req,res) => {
    Chest.findById(req.body.chest._id, (err, chest ) => {
        chest.stock = req.body.chest.stock;
        chest.save()
    }) 
});


module.exports = router;