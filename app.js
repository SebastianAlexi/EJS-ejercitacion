const express = require('express');
const path = require('path')
const app = express();
const port = 3030;
//CONFIG
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'./views'))
// MID
app.use(express.static('public'))
//routers

const index = require('./routes/index')
//routes
app.use('/',index);
app.use('/detalle',index)

app.listen(port,()=>console.log(`http://localhost:${port}`))