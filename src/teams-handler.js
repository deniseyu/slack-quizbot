const _ = require('lodash');
const hogwartsHouses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];

const cycle = (arr) => {
  const first = arr[0];
  return result = _.rest(arr).concat(first);
};

const assignHouse = (assignments, house, player) => {
  var roster = assignments[house] === undefined ? [player] : assignments[house].concat(player);
  return assignments[house] = roster;
};

const sortPlayers = (players) => {
  const assignments = {};
  var houses = hogwartsHouses;

  _.forEach(players, player => {
    const nextHouse = houses[0];
    assignHouse(assignments, nextHouse, player);
    houses = cycle(houses);
  });

  return assignments;
};


module.exports = { sortPlayers, cycle };