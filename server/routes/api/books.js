//user : lomash
//p: G..r
//connection String : mongodb+srv://lomash:<password>@hiup-hgarc.mongodb.net/test?retryWrites=true&w=majority

const express = require('express');
const mongodb = require('mongodb');


const router = express.Router();

router.get('/', async (req,res) => {
    const books = await loadBooksCollection();
    res.send(await books.find({}).toArray());
});


router.post('/', async (req,res) => {
    const books = await loadBooksCollection();
    await books.insertOne({
        name: req.body.name,
        author:req.body.author,
        createdAt: new Date()
    });
    res.status(201).send();
})

router.delete('/:id', async (req,res) => {
    const books = await loadBooksCollection();
    await books.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
})

async function loadBooksCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://lomash:Godfather@hiup-hgarc.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser: true
    });

    return client.db('hiup').collection('books');
}

module.exports = router;