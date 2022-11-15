const express =require('express')
const expressHandlebars = require('express-handlebars')

const app = express()
const port = process.env.PORT || 3000
app.use(express.static(__dirname + '/public'))
// configure handlebars view engine 
app.engine('handlebars',expressHandlebars.engine({
    defaultLayout:'main',
}))

app.set('view engine','handlebars')

app.get('/',(req,res)=> res.render('home'))
app.get('/about',(req,res)=> res.render('about'))


app.listen(port ,()=>console.log('port is listening...'))
