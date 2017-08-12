class Cell {
  constructor(x, y) {
    this.x = x
    this.y = y

    this.wasHit = false
  }

  isMatch(x, y) {
    if(this.x === x && this.y === y) {
      this.wasHit === true
      return true
    } else {
      return false
    }
  }
}

module.exports = Cell
