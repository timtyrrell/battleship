const Board = require('../models/board')
const board = new Board()

module.exports = {
  create: (req, res) => {
    const positions = req.body.positions
    board.addShips(positions)

    // did not see any specification for a failed board creation (also out of time)
    res.json({ message: 'OK' })
  },

  update: (req, res) => {
    x = req.body.x
    y = req.body.y

    const result =  board.checkAttack(x,y)
    res.json({ message: result })
  }
}
