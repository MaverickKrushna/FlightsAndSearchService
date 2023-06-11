const { Airplane }= require('../models/index');

class AirplaneRespository{

    async getAirplane(id){

        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("something went wrong in the repository layer ");
            throw { error};
            
        }
    }
}
module.exports = AirplaneRespository ;