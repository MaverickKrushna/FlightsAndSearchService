/ 
    -src/
        index.js // server 
        models/
        controllers/
        middlewares/
        utils/
        config/
        repository /
        
    -test / [later]
    -static /
    -temp/
    


 
/

# Welcome to Flights Servicr 

## Project Setup 
- clone the project on your local 
- Execute `npm install` on the same path as of your root directory of tec dowloaded project 
- Creste a `.env` file in the root directory and the following environment  variable 
      - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following pieece of json
.....
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
.....
-Once you've added your db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`
and the execute 
`npx sequelize db:migrate` A
.......


## DB Design 
  - Airplane Table 
  - Flight 
  - City 
  - AirPort 


  -  A flight belongd to an  airplane but one airplane can be used in multiple flights 
  -A city has many airports but one airport belongs to a city 
  - One airport csn have many flights, but a flight belongs to one  airport 

  ## Tables 
  ### City -> id , name ,created_at , update_at 
  ### Airport -> id , name  , adress , city_id , created_at , update_at    belongs to city (one to many)
  Relationship -> City has many airport and Airport belongs to city (one to many) 
  ``````
   npx sequelize model:genrate --name Airport --attributes name:String , address:String , cityId:integer

  ```````