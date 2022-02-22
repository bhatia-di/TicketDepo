const { Sequelize } = require('sequelize');
const dbConfig = require('./config/databaseConfig');

const sequelize_orm = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
  });

module.exports = sequelize_orm;