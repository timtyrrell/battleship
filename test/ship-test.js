const expect = require('chai').expect
const Ship = require('../app/models/ship')
const Cell = require('../app/models/cell')
const CONSTANTS = require('../app/constants')
const { MISS, HIT, SUNK } = CONSTANTS

describe('Ship', () => {
  it('initializes generated coordinates into Cells', () => {
    const ship = new Ship([0,3])
    expect(ship.cells).to.have.lengthOf(3)
    expect(ship.cells[1]).to.be.an.instanceOf(Cell)
  })

  it('isSunk will initially be false', () => {
    const ship = new Ship([0,3])
    expect(ship.isSunk()).to.be.false
  })

  it('returns true when all cells habe been hit', () => {
    const ship = new Ship([0,3])
    ship.cells.forEach((cell) => cell.wasHit = true)
    expect(ship.isSunk()).to.be.true
  })

  describe('checkAttack', () => {
    it('returns MISS when coordinates do not match a cell', () => {
      const ship = new Ship([0,3])
      expect(ship.checkAttack(5,5)).to.equal(MISS)
    })

    it('returns SUNK when match and all cells have been hit', () => {
      const ship = new Ship([0,3])
      ship.cells.forEach((cell) => cell.wasHit = true)
      expect(ship.checkAttack(0,1)).to.equal(SUNK)
    })

    it('returns HIT when match on non-sunken ship', () => {
      const ship = new Ship([0,3])
      expect(ship.checkAttack(0,3)).to.equal(HIT)
    })

    it('returns SUNK when fine non-hit cell is hit', () => {
      const ship = new Ship([0,3])
      ship.cells[0].wasHit = true
      ship.cells[1].wasHit = true
      expect(ship.checkAttack(0,1)).to.equal(SUNK)
    })
  })
})
