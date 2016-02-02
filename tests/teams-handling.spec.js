var teamsHandler = require('../src/teams-handler');
var expect = require('chai').expect;
var _ = require('lodash');

describe('Team handler', function() {
  it('creates four teams', function() {
    const participants = ['Akash', 'Chris', 'Jigs', 'Denise', 'Dave', 'Vanessa']
    expect(_.keys(teamsHandler.sortPlayers(participants)).length).to.equal(4);
  });

  it('implementation of cycle', function() {
    const arr = ['a', 'b', 'c', 'd'];
    expect(teamsHandler.cycle(arr)).to.deep.equal(['b', 'c', 'd', 'a']);
  });

  it('house points aggregate individual points', function() {

  });

});