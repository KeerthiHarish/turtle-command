const readline = require('readline')
const Turtle = require('./turtle')
var World = require('./world')

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

inputInterface.question("What are turtle's movements? ", (movements) => {
  console.log("Turtle's current state: ", getState(movements))
  inputInterface.close()
})

getState = (movements) => {
  let world = new World(1, 1)
  let turtle = new Turtle(1, 'N', world)
  movements.split('').forEach((movement) => {
    if (movement == 'F') {
      turtle.getPosition().updatePosition(turtle.getDirection(), turtle.getStepCount())
    } else {
      turtle.updateDirection(movement)
    }
  })

  return `${turtle.getPositionDetails()} ${turtle._direction}`
}
