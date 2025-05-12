const express = require('express')
const mongoose = require('mongoose')
const ProductRoutes = require('./routes/product.routes');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use("/api/products", ProductRoutes);



app.get('/',(req, res) => {
    res.send('Hello form Express Get API');
});


mongoose.connect('mongodb+srv://gohar2016623:2groGpyD2HbqfFdL@cluster0.oqlebou.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to database!');
    app.listen(3000, () =>{
        console.log('App is runnning on port 3000');
    });
})
.catch(() => {
    console.log("Couldn't connect to database");
});