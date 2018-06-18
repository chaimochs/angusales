const Sequelize = require('sequelize');

class Connection {

  constructor() {
    this.connection = new Sequelize('angusales', 'root', '1234', {
      Host: 'localhost',
      dialect: 'mysql',
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define: {
        timestamps: false
      }
  });
}
}
const sqlConnect = new Connection();
module.exports = sqlConnect;
