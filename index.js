const readline = require('readline')

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

inputInterface.question("What are turtle's movements? ", (movements) => {
  console.log("Turtle's current state: ", getState(movements))
  inputInterface.close()
})

getState = (movements) => {
  let world = new worldGrid(1, 1)
  let turtle = new Turtle(1, 'N')
  movements.split('').forEach((movement) => {
    if (movement == 'F') {
      world.updatePosition(turtle._direction, turtle._stepCount)
    } else {
      turtle.updateDirection(movement)
    }
  })

  return `${world.getPosition()} ${turtle._direction}`
}

class worldGrid {
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

class Turtle {
  constructor (stepCount = 1, direction = 'N') {
    this._stepCount = stepCount
    this._direction = direction
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
}
