module.exports = class World {
  constructor (xCord = 1, yCord = 1) {
    this._xCord = xCord
    this._yCord = yCord
  }

  updatePosition (direction, stepCount) {
    switch (direction) {
      case 'N':
        this._yCord += stepCount
        break
      case 'S':
        this._yCord -= stepCount
        break
      case 'E':
        this._xCord += stepCount
        break
      case 'W':
        this._xCord -= stepCount
        break
    }
  }

  getPosition () {
    return `${this._xCord},${this._yCord}`
  }
}
