"use strict";
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    "File",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      owner: {
        type: DataTypes.TEXT,
        allowNull: true
      },
    },
    {
      timestamps: false
    }
  );
  File.associate = function(models) {
    // File.belongsTo(models.Escort, {
    //   foreignKey: "id",
    //   as: "post",
    //   onDelete: "CASCADE"
    // });
  };

  // File.sync({ alter: true })

  return File;
};
