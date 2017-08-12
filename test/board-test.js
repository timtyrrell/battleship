const expect = require('chai').expect
const Board = require('../app/models/board')
const Ship = require('../app/models/ship')
const CONSTANTS = require('../app/constants')
const { MISS, HIT, SUNK } = CONSTANTS

describe('Board', () => {
  it('adds 3 ships', () => {
    const board = new Board()
    board.addShips([[0,3],[4,8],[6,6]])
    expect(board.ships).to.have.lengthOf(3)
    expect(board.ships[1]).to.be.an.instanceOf(Ship)
  })

  describe('checkAttack', () => {
    let board

    beforeEach(() => {
      board = new Board()
      board.addShips([[0,3],[4,8],[6,6]])
    })

    it('returns MISS if no ship is hit', () => {
      expect(board.checkAttack(9,9)).to.equal(MISS)
    })

    it('returns SUNK if matched ship is SUNK', () => {
      // this is really bad, but I don't have time to mock
      // this is a violation of the unit test boundry
      // same for the others below
      board.ships[0].cells.every((cell) => cell.wasHit = true)
      expect(board.checkAttack(0,3)).to.equal(SUNK)
    })

    it('returns HIT if matched first ship is hit', () => {
      board.ships[0].cells[0].wasHit = true
      expect(board.checkAttack(0,3)).to.equal(HIT)
    })

    it('returns HIT if matched last ship is hit', () => {
      board.ships[2].cells[2].wasHit = true
      expect(board.checkAttack(6,6)).to.equal(HIT)
    })
  })
})
