'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    tittle: DataTypes.STRING,
    description: DataTypes.STRING,
    UserId : DataTypes.INTEGER
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};