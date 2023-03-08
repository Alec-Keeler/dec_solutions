'use strict';

// Bonus:
// const colors = [
//   { name: 'red' },
//   { name: 'blue' },
//   { name: 'yellow' }
// ];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Colors', [
      { name: 'red' },
      { name: 'blue' },
      { name: 'yellow' }
    ])
    // Bonus:
    // await queryInterface.bulkInsert('Colors', colors);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', {
      name: ['red', 'blue', 'yellow']
    });
    // Bonus:
    // await queryInterface.bulkInsert('Colors', {
    //   name: colors.map(color => color.name)
    // });
  }
};
