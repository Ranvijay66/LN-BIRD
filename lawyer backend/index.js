const express =require('express');
const cors = require('cors');
require('dotenv').config();
require('./config');

const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.get('/',(req,res)=>res.send('user Managment system is running'));
app.use('/api/user',require('./routes/user.route'));


// Add this line to import the lawyer routes
app.use('/api/lawyers', require('./routes/lawyer.route'));

app.use('/uploads', express.static('uploads'));


app.listen(process.env.PORT,()=>{console.log(`server listing to PORT ${process.env.PORT} `);
})



