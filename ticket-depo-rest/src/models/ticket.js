'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ticket.init({
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
  },

  assignee_email: {
      type: Sequelize.STRING,
      allowNull: false
  },

 collaborators_email: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
},

description: {
  type: Sequelize.STRING,
  allowNull: false
},
due_at: {
  type: Sequelize.STRING,
  allowNull: false
},
priority: {
  
  type: Sequelize.ENUM("urgent", "high", "normal", "low"),
  allowNull: false
},
status: {
  type: Sequelize.ENUM("new", "open", "pending", "hold", "solved", "closed"),
  defaultValue: "open",
  allowNull: false
},
subject: {
  type: Sequelize.STRING,
  allowNull: false
},
tags: {
  type: Sequelize.ARRAY(Sequelize.TEXT),
  allowNull: true
},
type: {
  type: Sequelize.ENUM("problem", "incident", "question", "task"),
  defaultValue: "task",
  allowNull: false
}, 
  created_at: {
    timestamp: true,
    allowNull: false,
    type: Sequelize.DATE
  },
  updated_at: {
    timestamp: true,
    allowNull: false,
    type: Sequelize.DATE
  }
  
  }, {
    sequelize,
    modelName: 'ticket',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true
  });
  return ticket;
};