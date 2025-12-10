import { character, endOfLine, int, Parser, some, whitespace } from "../utils/parsers";
import { Button, IndicatorLights, Joltage, Machine } from "./common";

const light: () => Parser<'.' | '#'> = () => character('.').or(character('#')) as Parser<'.' | '#'>;
const indicatorLights: () => Parser<IndicatorLights> = () => character('[').preceding(some(light())).followedBy(character(']'));

const button: () => Parser<Button> = () => character('(').preceding(some(int().followedBy(character(',')).or(int()))).followedBy(character(')'));

const joltage: () => Parser<Joltage> = () => character('{').preceding(some(int().followedBy(character(',')).or(int()))).followedBy(character('}'));

const machine: () => Parser<Machine> = () => indicatorLights().andThen(lights => whitespace().preceding(some(button().followedBy(whitespace()))).andThen(buttons => joltage().map(j => ({
  indicatorLights: lights,
  buttons: buttons,
  joltage: j
}))));

export function parse(input: string, part: number): Machine[] {
  const parser = some(machine().followedBy(endOfLine()));

  const result = parser.parse(input)!;

  return result;
}