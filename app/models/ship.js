const Cell = require('./cell')
const CONSTANTS = require('../constants')
const { MISS, HIT, SUNK } = CONSTANTS

class Ship {
  constructor(topmostCell) {
    const x = topmostCell[0]
    const y = topmostCell[1]

    // ideally, would have a check to make sure we are not off the grid
    this.cells = [
      new Cell(x,y),
      new Cell(x, y-1),
      new Cell(x, y-2),
    ]
  }

  isSunk() {
    return this.cells.every((cell) => cell.wasHit)
  }

  checkAttack(x,y) {
    const result = this.cells.find((cell) => cell.isMatch(x,y))
    if(!result) { return MISS}

    if(this.isSunk()) {
      return SUNK
    } else {
      result.wasHit = true

      // most recent hit may have sunk the ship, do a check
      if(this.isSunk()) {
        return SUNK
      }
      return HIT
    }
  }
}

module.exports = Ship
