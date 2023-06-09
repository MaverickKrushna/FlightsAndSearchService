const  { CityService } = require('../services/index');
const cityService = new CityService();
const create = async (req ,res)=>{
    try{
        // const  city = await cityService.createCity(req.body);
        const response = await cityService.createCity(req.body);
        return res.status(201).json({
            data : response, 
            success : true ,
            message : "Successfully created a city ",
            err:{}

        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false , 
            message : 'Not able to create a city ',
            err : error 

        });
    }

} 

const destroy = async (req ,res)=>{
    try{
        
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response , 
            success : true ,
            message : "Successfully deleted a city ",
            err:{}
  
        });


    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false , 
            message : 'Not able to delet  a city ',
            err : error 

        });
    }
    
} 

 const get = async (req ,res)=>{
    try{
        
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response , 
            success : true ,
            message : "Successfully fetch a city ",
            err:{}
  
        });


    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false , 
            message : 'Not able to get  a city ',
            err : error 

        });
    }
    
} 

// Patch
const update = async(req ,res)=>{
    try{
        const response = await cityService.getCity(req.params.id , req.body);
        return res.status(200).json({
            data : response , 
            success : true ,
            message : "Successfully update   a city ",
            err:{}

        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false , 
            message : 'Not able to update a city ',
            err : error 

        });
    }
    
} 

// getALL 
const getAll = async (req ,res)=>{
    try{
        
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data : response , 
            success : true ,
            message : "Successfully fetched all cities ",
            err:{}
  
        });


    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false , 
            message : 'Not able to get  a cities ',
            err : error 

        });
    }
    
} 



module.exports={
    create ,
    destroy,
    get,
    getAll,
    update
}