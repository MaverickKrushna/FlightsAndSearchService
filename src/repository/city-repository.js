const { City } = require('../models/index');
const {Op} = require('sequelize');


class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({
                name 
            });
            return city;
           }catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        } 
    }
    //  async create(data) {
    //     const response = await this.model.create(data);
    //     return response;
    // }


    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in the repository layer ");
            throw {error};
        }
    }

    async updateCity(cityId , data ) {
        try {
            const city = await City.update(data,{
                where: {
                    id: cityId
                }
            });
            // const city = await City.findByPk(cityId);
            // city.name = data.name ;
            // await   city.save();
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer ");
            throw {error};

        }
    }


    async getCity(cityId) {
        try {
            const city= await City.findByPk(cityId);
            // const cit1 = await City.findByPk(cityId);
            return city  ;
        } catch (error) {
            console.log("something went wrong in the repository layer ");
            throw {error};

        }

    }
    async getAllCities(filter) {
        try {
            if(filter.name){
                const cities = await City.find({
                    where:{
                         [Op.startsWith] : filter.name 
                    }
                });
                return cities ;
            }
            const city = await City.findAll(  );
            return city  ;
        } catch (error) {
            console.log("something went wrong in the repository layer ");
            throw {error};

        }

    }
}
module.exports = CityRepository;