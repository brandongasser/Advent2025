import { character, endOfLine, int, newline, Parser, some } from "../utils/parsers";
import { IdRange } from "./common";

const idRange: Parser<IdRange> = int().andThen(start => character('-').preceding(int()).map(end => ({ start, end })));
const idRanges: Parser<IdRange[]> = some(idRange.followedBy(endOfLine()));

const ids: Parser<number[]> = some(int().followedBy(endOfLine()));

const parser: Parser<{ freshIdRanges: IdRange[], ids: number[] }> = idRanges.andThen(freshIdRanges => newline().preceding(ids).map(ids => ({ freshIdRanges, ids })));

export function parse(input: string, part: number): { freshIdRanges: IdRange[], ids: number[] } {
  return parser.parse(input)!;
}