const { FlightRespository , AirplaneRespository }= require('../repository/index');

const { compareTime } = require('../utils/helper');

class FlightService{
    constructor(){
        this.airplaneRespository = new AirplaneRespository();
        this.flightRespository = new FlightRespository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime , data.departureTime)){
                throw{error : 'Arrival time cannot be less than departure time '}
            }
 
const airplane = await airplaneRespository.getAirplane(data.airplaneId);
const flight = await this.flightRespository.createFlight({...data , totalSeats:airplane.capacity
 });
return flight ;
 
 return airplane ;
        }catch(error){
            console.log("something wrong at service layer ");

            throw {error};
        }
    }


    async getAllFlighDate(data){
        try {
            const flights = await this.flightRespository.getAllFlight(data);
            return flights;
            
        } catch (error) {
            console.log("something wrong at service layer ");

            throw {error};
            
        }

    }




}
module.exports =  FlightService ;
