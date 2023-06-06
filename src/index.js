const express = require("express");
// require('dotenv').config();
const bodyParser = require("body-parser");
const {City}= require('./models/index');

const { PORT } = require('./config/serverConfig');

const ApiRoutes = require('./routes/index');

const CityRepository = require('./repository/city-repository')
const setupAndStartServer = async ()=>{
    // create the express object 
    const app = express();
    // const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended :true}));

    app.use('/api' , ApiRoutes);



    app.listen(PORT , async ()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process);

        // console.log(City);

    // await City.create({
    //     name : "New Delhi",
    // });

    // const repo = new CityRepository();
    // repo.createCity({name: "New Delhi "});
    // repo.deleteCity(1);
    });

   

}

setupAndStartServer(); 