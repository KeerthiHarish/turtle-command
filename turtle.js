const Animal = require('./animal')
module.exports = class Turtle extends Animal {
  constructor (stepCount, direction, position) {
    super(stepCount, direction, position, 'Turtle')
  }
}
