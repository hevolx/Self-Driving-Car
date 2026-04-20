import { getObstacleEvents } from './computer-vision';

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
      return events;
    } else {
      return console.log('The car is off');
    }
  };
}

const steering = new SteeringControl()
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(getObstacleEvents());
console.log(autonomousCar);