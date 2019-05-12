var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nodejsdb', {useNewUrlParser: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error :'))
db.once('open', ()=> {
    console.log('Connect success')
})

//schema structor of table
var mySchema = new mongoose.Schema({ any: mongoose.Schema.Types.Mixed })

//var mySchemaless = new mongoose.Schema({}, {strict:false})
//insert( req.body ) 

// Object for manage data
var my = mongoose.model('books', mySchema)

// GET home page
router.get('/', async (req, res)=> {
    await res.send('Myapi')
})

// CRUD

//Add
router.post('/insert', async (req, res)=>{
    await my.insertMany( {any : req.body}, (err, rs)=>{
        if (err) {
            res.send(err)
        }else {
            res.send(rs)
        }
    })
})

//Find
router.get('/select', async (req, res)=>{
    await my.find( {}, (err, rs)=>{
        if (err) {
            res.send(err)
        }else {
            res.send(rs)
        }
    })
})

//Del
router.get('/delete/:id', async (req, res)=>{
    await my.deleteMany( {_id: req.params.id}, (err, rs)=>{
        if (err) {
            res.send(err)
        }else {
            res.send(rs)
        }
    })
})

//
router.get('/update', async (req, res)=>{
    await my.updateMany( { name : 'NODE.js'},{ name: 'Fucj you', price: 30}, (err, rs)=>{
        if (err) {
            res.send(err)
        }else {
            res.send(rs)
        }
    })
})
module.exports = router