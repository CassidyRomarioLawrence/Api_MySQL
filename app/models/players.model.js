module.exports = (sequelize, Sequelize) => {
  const Players = sequelize.define("players", {
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    successful: {
      type: Sequelize.BOOLEAN
    }
  });

  return Players;
};