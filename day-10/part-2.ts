import { init } from "z3-solver";
import { Machine } from "./common";
import { sum } from "../utils/utils";

export async function solveMachine(machine: Machine): Promise<number> {
  const { Context } = await init();
  // @ts-ignore
  const { Optimize, Int, And } = new Context('main');

  const vars = machine.buttons.map((_, i) => Int.const(`x${i}`));

  const optimizer = new Optimize();

  optimizer.add(And(...vars.map(v => v.ge(0)),
    ...machine.joltage.map((jolt, i) => machine.buttons.map((button, j) => vars[j].mul(button.includes(i) ? 1 : 0)).reduce((a, b) => a.add(b)).eq(jolt))
  ));

  optimizer.minimize(vars.reduce((a, b) => a.add(b)));

  const sat = await optimizer.check();

  if (sat === 'sat') {
    const model = await optimizer.model();

    let result = 0;
    for (let v of vars) {
      result += Number(model.get(v).value());
    }
    
    return result;
  }
  
  return 0;
}

export async function part2(input: Machine[]): Promise<number> {
  return sum(await Promise.all(input.map(solveMachine)));
}