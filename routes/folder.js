const router = require('express').Router();
const Folder = require('../models/Folder');
const { folderValidation } = require('../validation');
const verify = require('./verifyToken')

router.post('/new', verify, async (req,res) => {

    req.body.user = userId

    const {error} = folderValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

     const folder = new Folder({
        name: req.body.name,
        user: req.body.user,
    })
    try {
        const savedFolder = await folder.save()
        res.send({folder: folder._id});
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/get', verify, async (req,res) => {
    const folder = await Folder.find({user: userId });
    res.json({folder})
}),
router.put('/edit', async (req,res) => {

    Folder.findById(req.query.id, (err, folder) => {
        folder.name = req.body.name;
        folder.save()
        res.json(folder)
    }) 
    
});
router.delete('/delete', async (req,res) => {
    console.log(req.query.id)
    Folder.findByIdAndRemove(req.query.id, (err, todo) => {
        if(err) {
          return next(new Error('Todo was not found!'));
        }
        res.json('Successfully removed');
      });
    
}),

module.exports = router;