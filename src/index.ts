import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
  isRunning?: boolean;
  respond(events: Events): void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
}

interface Events {
  [i: string]: boolean;
}
class Car implements AutonomousCar {
  isRunning?: boolean;

  constructor(props: AutonomousCarProps) {
    if (props.isRunning !== undefined) {
      this.isRunning = props.isRunning;
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

const autonomousCar = new Car({ isRunning: true });
autonomousCar.respond(getObstacleEvents());