module.exports = {
  up: (queryInterface, Sequelize) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: (queryInterface) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    queryInterface.removeColumn('users', 'avatar_id'),
};
