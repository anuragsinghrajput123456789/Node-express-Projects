const express = require('express')
const sendEmail = require('./utils/sendEmail')
const app = express()
const port = 3000


//server static files
app.use(express.static('public'))
//set engine here...
app.set("view engine", "ejs")
app.use(express.urlencoded({extended : false}))

app.get('/', (req, res) => {
  res.render("email-form");
})


app.post('/send-email',async (req,res) => {
  const {email,message} = req.body;
   try{
       sendEmail(email, message);
   }
   catch(error){
      console.log(error);
   }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})