module.exports = class Animal {
  constructor (stepCount = 1, direction = 'N', position, animalName) {
    this._stepCount = stepCount
    this._direction = direction
    this._position = position
    this._animalName = animalName
  }

  getStepCount () {
    return this._stepCount
  }

  getDirection () {
    return this._direction
  }

  getPosition () {
    return this._position
  }

  getPositionDetails () {
    return `${this._position._xCord},${this._position._yCord}`
  }

  updateDirection (movement) {
    switch (movement) {
      case 'L':
        if (this._direction == 'N') {
          this._direction = 'W'
        } else if (this._direction == 'S') {
          this._direction = 'E'
        } else if (this._direction == 'E') {
          this._direction = 'N'
        } else {
          this._direction = 'S'
        }
        break
      case 'R':
        if (this._direction == 'N') {
          this._direction = 'E'
        } else if (this._direction == 'S') {
          this._direction = 'W'
        } else if (this._direction == 'E') {
          this._direction = 'S'
        } else {
          this._direction = 'N'
        }
        break
    }
  }

  canProceed (direction) {
    let {
      _xCord: xCord,
      _yCord: yCord,
      _obstacles: obstacles
    } = this._position
    let returnValue = true
    obstacles.forEach((obstacle) => {
      switch (direction) {
        case 'N':
          if ((xCord == obstacle.x) && (yCord + 1 == obstacle.y)) {
            return false
          }
          break
        case 'S':
          if ((xCord == obstacle.x) && (yCord - 1 == obstacle.y)) {
            return false
          }
          break
        case 'W':
          if ((xCord - 1 == obstacle.x) && (yCord == obstacle.y)) {
            return false
          }
          break
        case 'E':
          if ((xCord + 1 == obstacle.x) && (yCord == obstacle.y)) {
            return false
          }
          break
      }
    })
    return true
  }
}
