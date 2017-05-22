module.exports = class World {
  constructor (xCord = 1, yCord = 1, worldSize = 5) {
    this._xCord = xCord
    this._yCord = yCord
    this._worldSize = worldSize
    this._obstacles = []
    this.createRandomObstacles(worldSize)
  }

  createRandomObstacles (worldSize) {
    let max = worldSize
    let min = 1
    for (let i = 0; i < max; i++) {
      this._obstacles.push({ x: Math.floor(Math.random() * (max - min + 1)) + min, y: Math.floor(Math.random() * (max - min + 1)) + min })
    }
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
