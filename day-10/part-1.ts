import { sum } from "../utils/utils";
import { Button, IndicatorLights, Machine } from "./common";

export function pressButton(lightState: IndicatorLights, button: Button): IndicatorLights {
  const newState: IndicatorLights = [...lightState];

  for (let i = 0; i < lightState.length; i++) {
    if (button.includes(i)) {
      newState[i] = newState[i] === '.' ? '#' : '.';
    }
  }

  return newState;
}

export function solveMachine(machine: Machine): number {
  const visitedStates: string[] = [];
  function helper(lightState: IndicatorLights, moves: number): number {
    const key = lightState.join('');

    if (lightState.filter(light => light === '#').length === 0) {
      return moves;
    }

    if (visitedStates.includes(key)) {
      return 999999999;
    }

    visitedStates.push(key);

    return Math.min(...machine.buttons.map(button => helper(pressButton(lightState, button), moves + 1)));
  }

  return helper(machine.indicatorLights, 0);
}

export function part1(input: Machine[]): number {
  return sum(input.map(solveMachine));
}