'use strict';
module.exports = (sequelize, DataTypes) => {
  var userRoles = sequelize.define('userRoles', {
    urName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  userRoles.associate = function (models) {
    // associations can be defined here
  };
  return userRoles;
};