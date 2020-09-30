const express = require('express')
const router = express.Router()
const News = require('../schema/newsformat')


router.get('/', async (req,res) => {
    try{
           const news = await News.find()
           res.json(news)
    }catch(err){
        console.log(err);
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const news = await News.findById(req.params.id)
           res.json(news)
    }catch(err){
        res.send('Error ' + err)
        console.log(err);
    }
})


router.post('/', async(req,res) => {
    const newslist = new News({
        id:req.body.id,
        title:req.body.title,
       url: req.body.url,
        comments: req.body.comments,
        sub: req.body.sub  
    })
    //console.log(newslist);

    try{
        const news1 =  await newslist.save() 
        res.json(news1)
        
    }catch(err){
        res.send('Error ' + err)
        console.log(err);
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const news = await News.findById(req.params.id) 
        news.sub = req.body.sub;
        
        const newslist = await news.save()
        res.json(newslist)   
    }catch(err){
        res.send('Error' + err)
        console.log(err);
    }
    

})
router.delete('/:id',async(req,res)=> {
    try{
        const news = await News.findById(req.params.id) 
        news.sub = req.body.sub;
        
        const newslist = await news.delete()
        res.json(newslist)   
    }catch(err){
        res.send('Error' + err)
        console.log(err);
    }
});

module.exports = router



