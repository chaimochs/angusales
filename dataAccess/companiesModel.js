const Sequelize = require('sequelize');
const sqlConnect = require('./connection');


   const Companies = sqlConnect.connection.define('Companies', {

      Address: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      companyId:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
     name: {
        type: Sequelize.STRING
      }
    });

module.exports = Companies;
