const Sequelize = require('sequelize');
const sqlConnect = require('./connection');
const Companies = require('./companiesModel');

   const Customers = sqlConnect.connection.define('customers', {

      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      companyId:{
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      customerId:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      comments: {
        type: Sequelize.STRING
      }
    });

Customers.belongsTo(Companies, {foreignKey: "companyId"} );
module.exports = Customers;
