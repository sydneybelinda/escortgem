"use strict";
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "City",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      countrycode: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      country: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      state: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      cityslug: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  City.associate = function(models) {
    // associations can be defined here
  };

  // City.sync({ alter: true })

  return City;
};
