const express =require('express');
const cors = require('cors');
require('dotenv').config();
require('./config');

const app= express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>res.send('user Managment system is running'));
app.use('/api/user',require('./routes/user.route'));
app.use('/api/product',require('./routes/product.route'));
app.listen(process.env.PORT,()=>{console.log(`server listing to PORT ${process.env.PORT} `);
})



