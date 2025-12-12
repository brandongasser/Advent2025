function charCount(str: string, char: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

export function parse(input: string, part: number): { sizes: number[], regions: { area: number, counts: number[] }[] } {
  const parts = input.split('\n\n');
  
  const sizes = parts.slice(0, parts.length - 1).map(part => charCount(part, '#'));

  const regions = parts[parts.length - 1].split('\n').map(region => {
    const parts = region.split(' ');
    
    const [x, y] = parts[0].split('x');
    const area = +x * +(y.slice(0, y.length - 1));

    const counts = parts.slice(1).map(x => +x);

    return { area, counts };
  });

  return { sizes, regions };
}