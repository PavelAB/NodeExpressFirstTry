//Sequelize
const  {Sequelize,DataTypes}=require('sequelize');

const { DB_USERNAME,
        DB_PASSWORD,
        DB_DATABASE,
        DB_PORT,    
        DB_SERVER} = process.env
const sequelize = new Sequelize(DB_USERNAME,DB_PASSWORD,DB_DATABASE,{host:DB_SERVER,port:DB_PORT,dialect:'mssql'})

const db = {}



module.exports = db;