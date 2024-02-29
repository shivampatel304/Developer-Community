const { Sequelize } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define("user", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, //checks for email format
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{timestamps: true},)

    return User
}