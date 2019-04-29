'use strict';
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : (user,options)=>{
        const hash = bcrypt.hashSync(user.password,salt)
        user.password = hash
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};