var app = require('express')()
var cors = require('cors')
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000

var route = require('./route')

app.use(cors())
app.use(bodyParser.json())

app.use('/mongo', route)

app.get('/', (req, res)=>{
    res.send('Home page')
})

app.listen(port, ()=> {
    console.log(`Server is runing on port : ${port}`)
})

