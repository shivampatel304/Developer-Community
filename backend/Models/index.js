const { Sequelize, DataTypes } = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@
${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {dialect: "postgres"});

//Checking if connection is done 
sequelize.authenticate().then(()=>{
    console.log(`Database connected to discover`);
}).catch((err) =>{
    console.log(err);
})

const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize

//connecting to model
db.users = require('./userModel')(sequelize, DataTypes)

module.exports = db