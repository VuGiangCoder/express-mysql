"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    //  email: DataTypes.INTEGER,
    //  firstName: DataTypes.STRING,
    //  lastName: DataTypes.STRING,
    //  address: DataTypes.STRING,
    //  gender: DataTypes.BOOLEAN,
    //  roleid: DataTypes.STRING,
    //  password: DataTypes.STRING,
    return queryInterface.bulkInsert("Users", [
      {
        email: "giang2010gc@gmail.com",
        firstName: "John",
        lastName: "Doe",
        address: "giao chau",
        gender: 1,
        password: "123456",
        roleId: "abc",
        phoneNumber: '"131314144"',
        positionId: "abcsdqa",
        image: "daksdasidada@jfasodf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
