'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ticket', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ticket');
  }
};