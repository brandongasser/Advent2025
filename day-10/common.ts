export type IndicatorLights = ('.' | '#')[];

export type Button = number[];

export type Joltage = number[];

export type Machine = {
  indicatorLights: IndicatorLights,
  buttons: Button[],
  joltage: Joltage
};