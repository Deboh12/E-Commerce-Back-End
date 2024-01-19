const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Category model extends Sequelize's Model class
class Category extends Model {}

// Initialize the Category model with its defined columns and configuration
Category.init(
  {
    // Define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define a category_name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;