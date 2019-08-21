const router = require('express').Router();
const Library = require('../models/Library');
const verify = require('./verifyToken')

router.get('/get', verify, async (req,res) => {
    const library = await Library.find({user: userId });
    res.json({library})
}),

router.put('/update', async (req,res) => {
    Library.findById(req.body.library._id, (err, library) => {
        library.folders = req.body.library.folders;
        library.save()
    }) 
    
});


module.exports = router;