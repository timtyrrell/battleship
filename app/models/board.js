const Ship = require('./ship')
const CONSTANTS = require('../constants')
const { MISS, HIT, SUNK } = CONSTANTS

class Board {
  addShips(shipPlacements = []) {
    this.ships = []
    // no validation to see that we have, and only have, 3 ships
    // and that they are all on the board
    shipPlacements.forEach((placement) => {
      const ship = new Ship(placement)
      this.ships.push(ship)
    })
  }

  checkAttack(x,y) {
    let result = MISS
    this.ships.forEach((ship) => {
      const check = ship.checkAttack(x,y)
      // if the ship has a matching cell, store it
      if(check === SUNK || check === HIT) { result = check }
    })
    return result
  }
}

module.exports = Board
