const expect = require('chai').expect
const Cell = require('../app/models/cell')

describe('Cell', () => {
  it('initializes with x and y coordinates', () => {
    const cell = new Cell(0,3)
    expect(cell.x).to.equal(0)
    expect(cell.y).to.equal(3)
  })

  it('initializes wasHit to false', () => {
    const cell = new Cell(0,3)
    expect(cell.wasHit).to.be.false
  })

  it('returns boolean if coordinates match', () => {
    const cell = new Cell(0,3)
    expect(cell.isMatch(0,3)).to.be.true
    expect(cell.isMatch(1,3)).to.be.false
  })
})
