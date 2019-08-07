const router = require('express').Router();
const Binder = require('../models/Binder');
const mongoose = require('mongoose');
const { binderValidation } = require('../validation');

router.post('/new', async (req,res) => {

    const {error} = binderValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

     const binder = new Binder({
        name: req.body.name,
        description: req.body.description,
        folder: req.body.folder,
    })
    try {
        const savedBinder = await binder.save()
        res.send({binder: binder._id});
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/get', async (req,res) => {
   
    const idFolder = req.query.id
    

    const binder = await Binder.find({folder: idFolder });
    
    res.json({binder})
}),
router.put('/edit', async (req,res) => {
    Binder.findById(req.query.id, (err, binder) => {
        console.log(req.body.description)
        binder.name = req.body.name;
        binder.description = req.body.description;
        binder.save()
        res.json(binder)
    })
});
router.delete('/delete/all', async (req,res) => {
    Binder.deleteMany({folder: req.query.id}, (err, todo) => {
        if(err) {
          return next(new Error('Todo was not found!'));
        }
        res.json('Successfully removed');
      });
}),
router.delete('/delete', async (req,res) => {
    Binder.deleteOne({_id: req.query.id}, (err, todo) => {
        if(err) {
          return next(new Error('Todo was not found!'));
        }
        res.json('Successfully removed');
    });
}),


router.put('/market/new', async (req,res) => {
    Binder.findById(req.query.id, (err, binder) => {
        binder.markets.push({"name" :req.body.name})
        binder.tables.forecast.quantitative_sales.tabs.push({"market_id" :binder.markets.slice(-1).pop()._id})
        binder.tables.achieve.quantitative_sales.tabs.push({"market_id" :binder.markets.slice(-1).pop()._id})
        binder.save()
        res.json(binder)
    })
});
router.put('/market/edit', async (req,res) => {
    Binder.findOne({'markets._id' :req.query.id}, (err, binder) => {
       for(i in binder.markets){
           if(binder.markets[i]._id == req.query.id){
            binder.markets[i].set({"name" :req.body.name})
            binder.save()
           }
       };
        res.json(binder)
    })
});
router.put('/market/delete', async (req,res) => {
    Binder.findOne({'_id' :req.query.id}, (err, binder) => {
        
        const forecastTab = binder.tables.forecast.quantitative_sales.tabs.find(tab => tab.market_id == req.query.market_id);
        binder.tables.forecast.quantitative_sales.tabs.pull({'_id' :forecastTab._id});
        
        const achieveTab = binder.tables.achieve.quantitative_sales.tabs.find(tab => tab.market_id == req.query.market_id);
        binder.tables.achieve.quantitative_sales.tabs.pull({'_id' :achieveTab._id});
        
        binder.markets.pull({"_id":req.query.market_id});

        binder.save()
        
        res.json(binder)
    })
});


router.put('/forecast/quanti_sales/line/new', async (req,res) => {
    Binder.findById(req.query.id, (err, binder) => {
        const tabs = binder.tables.forecast.quantitative_sales.tabs
        console.log(req.body.data, req.body.tabs_id);
        tabs.forEach((tab) => {
            if(tab._id == req.body.tabs_id){
                req.body.data.forEach((data) => {
                    tab.line.push(data)
                })
            }
        })
        binder.save()
        res.json(binder)
    })
});
router.put('/forecast/quanti_sales/line/edit', async (req,res) => {
    Binder.findById(req.query.id, (err, binder) => {
        const tabs = binder.tables.forecast.quantitative_sales.tabs;
        console.log(req.body.data);
        tabs.forEach((tab) => {
            if(tab._id == req.body.tabs_id){
                tab.line.splice(0)
                req.body.data.forEach((data) => {
                    tab.line.push(data)
                })
            }
        })
        binder.save()
        res.json(binder)
    })
});
router.put('/forecast/quanti_sales/line/delete', async (req,res) => {
    Binder.findById(req.query.id, (err, binder) => {
        const tabs = binder.tables.forecast.quantitative_sales.tabs;
        tabs.forEach((tab) => {
            if(tab._id == req.body.tabs_id){
                tab.line.splice(0)
            }
        })
        binder.save()
        res.json(binder)
    })
});


router.put('/achieve/quanti_sales/line/new', async (req,res) => {
    Binder.findById(req.query.id, (err, binder) => {
        const tabs = binder.tables.achieve.quantitative_sales.tabs
        console.log(req.body.data, req.body.tabs_id);
        tabs.forEach((tab) => {
            if(tab._id == req.body.tabs_id){
                req.body.data.forEach((data) => {
                    tab.line.push(data)
                })
            }
        })
        binder.save()
        res.json(binder)
    })
});
router.put('/achieve/quanti_sales/line/edit', async (req,res) => {
    Binder.findById(req.query.id, (err, binder) => {
        const tabs = binder.tables.achieve.quantitative_sales.tabs;
        console.log(req.body.data);
        tabs.forEach((tab) => {
            if(tab._id == req.body.tabs_id){
                tab.line.splice(0)
                req.body.data.forEach((data) => {
                    tab.line.push(data)
                })
            }
        })
        binder.save()
        res.json(binder)
    })
});
router.put('/achieve/quanti_sales/line/delete', async (req,res) => {
    Binder.findById(req.query.id, (err, binder) => {
        const tabs = binder.tables.achieve.quantitative_sales.tabs;
        tabs.forEach((tab) => {
            if(tab._id == req.body.tabs_id){
                tab.line.splice(0)
            }
        })
        binder.save()
        res.json(binder)
    })
});
module.exports = router;