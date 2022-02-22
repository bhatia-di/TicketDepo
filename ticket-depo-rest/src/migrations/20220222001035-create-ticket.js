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
      type: Sequelize.STRING,
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
    type: Sequelize.ARRAY(Sequelize.ENUM({
      values: ["urgent", "high", "normal", "low"]
  })),
    allowNull: false
  },
  status: {
    type: Sequelize.ARRAY(Sequelize.ENUM({
      values: ["new", "open", "pending", "hold", "solved", "closed"]
  })),
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
    type: Sequelize.ARRAY(Sequelize.ENUM({
      values: ["problem", "incident", "question", "task"]
  })),
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