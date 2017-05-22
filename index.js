const readline = require('readline')
const Turtle = require('./turtle')
var World = require('./world')

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

inputInterface.question('Enter world size: ', (worldSize) => {
  inputInterface.question("What are turtle's movements? ", (movements) => {
    console.log("Turtle's current state: ", getState(movements, worldSize))
    inputInterface.close()
  })
})

getState = (movements, worldSize) => {
  let world = new World(1, 1, worldSize)
  let turtle = new Turtle(1, 'N', world)
  movements.split('').forEach((movement) => {
    movement = movement.toUpperCase()
    if (movement == 'F') {
      if (turtle.canProceed(turtle.getDirection())) {
        turtle.getPosition().updatePosition(turtle.getDirection(), turtle.getStepCount())
      }
    } else {
      turtle.updateDirection(movement)
    }
  })

  return `${turtle.getPositionDetails()} ${turtle._direction}`
}
