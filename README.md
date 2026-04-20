# Self-Driving Car

A TypeScript simulation of an autonomous vehicle that detects obstacles and steers accordingly — built as a Codecademy learning project focused on TypeScript object types, interfaces, and class hierarchies.

## Motivation

Self-driving cars are set to be the next revolution in the automotive industry. This project models the core decision loop of an autonomous vehicle: perceive the environment via computer vision and react with steering commands, using TypeScript's type system to enforce correctness across classes, interfaces, and methods.

## Tech/framework used

<b>Built with</b>

- [TypeScript](https://www.typescriptlang.org/)
- Node.js

## Features

- `AutonomousCar` and `Steering` interfaces with a strict control hierarchy
- `Car` class that processes obstacle events and issues directional steering commands
- Simulated computer-vision module (`getObstacleEvents`) that randomly generates left/right obstacle detections
- Fully typed event maps using TypeScript index signatures

## Code Example

```typescript
const steering = new SteeringControl();
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(getObstacleEvents());
// Output: "Executing: turn right" or "Executing: turn left"
```

## Installation

```bash
git clone <repo-url>
cd SelfDrivingCar
npm install
```

## How to use?

Compile and run:

```bash
npx tsc
node dist/index.js
```

Or run directly with `ts-node`:

```bash
npx ts-node src/index.ts
```

## Credits

Project concept and requirements by [Codecademy](https://www.codecademy.com/courses/learn-typescript/projects/self-driving-car).

## License

MIT © [Love Holmgren](https://github.com/hevolx)
