export function largestJoltage(bank: number[], choicesLeft: number): number {
  if (choicesLeft === 0) {
    return 0;
  }
  const choice = Math.max(...bank.slice(0, bank.length - choicesLeft + 1));

  return choice * Math.pow(10, choicesLeft - 1) + largestJoltage(bank.slice(bank.indexOf(choice) + 1), choicesLeft - 1);
}