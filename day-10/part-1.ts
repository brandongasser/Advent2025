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
  function helper(lightState: IndicatorLights, buttons: Button[], moves: number): number {
    if (lightState.filter(light => light === '#').length === 0) {
      return moves;
    }

    let min = 99999;
    for (let i = 0; i < buttons.length; i++) {
      min = Math.min(min, helper(pressButton(lightState, buttons[i]), buttons.slice(i + 1), moves + 1));
    }

    return min;
  }

  return helper(machine.indicatorLights, machine.buttons, 0);
}

export function part1(input: Machine[]): number {
  return sum(input.map(solveMachine));
}