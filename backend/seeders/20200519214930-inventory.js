'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('inventories', [
      {
        name: 'Espada de madeira',
        attribute: 'força: 60',
        durability: '160/220',
        category: 'sword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Espada de aço',
        attribute: 'força: 180 + 25% de destreza',
        durability: '800/850',
        category: 'sword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Escudo de bronze',
        attribute: 'Defesa: 210 ',
        durability: '800/850',
        category: 'shield',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Capacente de bronze',
        attribute: 'Defesa: 150',
        durability: '320/320',
        category: 'helmet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], 
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inventories', null, {});
  }
};
