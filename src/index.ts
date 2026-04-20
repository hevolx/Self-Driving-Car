import { getObstacleEvents } from './computer-vision';

/**
 * TODO (extra credit):
 * 1. Write code that will call .respond() many times with new events to see a sequence of turns.
 * 2. Write code that allows the car to accelerate or decelerate based on the event.
      You could make this another type that extends the Control type.
 * 3. Add more types of events so your car can do things like ‘emergencyBrake’ or ‘parallelPark’.
 */

interface AutonomousCar {
  isRunning?: boolean;
  respond(events: Events): void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface Events {
  [i: string]: boolean;
}

interface Control {
  execute(command: string): void;
}

interface Steering extends Control {
  turn(direction: string): void;
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }
  turn(direction: string) {
    this.execute(`turn ${direction}`);
  }
}

class Car implements AutonomousCar {
  isRunning?: boolean;
  steeringControl: Steering | undefined;

  constructor(props: AutonomousCarProps) {
    if (props.isRunning !== undefined) {
      this.isRunning = props.isRunning;
      this.steeringControl = props.steeringControl;
    }
  }

  respond(events: Events) {
    if (this.isRunning == true) {
      let event = Object.keys(events);
      event.forEach((eventKey) => {
        if (events[eventKey] == false) {
          return
        } else {
          if (this.steeringControl !== undefined) {
            this.steeringControl.turn(eventKey == 'ObstacleLeft' ? 'right' : 'left')
          }
        }
      })
    } else {
      return console.log('The car is off');
    }
  };
}

const steering = new SteeringControl()
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(getObstacleEvents());