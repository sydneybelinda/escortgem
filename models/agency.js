// const Sequelize = require('sequelize');

"use strict";
module.exports = (sequelize, DataTypes) => {
  const Agency = sequelize.define(
    "Agency",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      agencyname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true
      },
      profpic: {
        type: DataTypes.STRING,
        allowNull: true
      },
      enabled: {
        type: DataTypes.STRING,
        allowNull: true
      },
      postcode: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      twitterid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastEscortId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      timestamps: false
    }
  );
  Agency.associate = function(models) {
    // associations can be defined here
  };

 Agency.sync({ alter: true })

  return Agency;
};

