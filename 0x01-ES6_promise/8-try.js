// Divide by 0
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }

  const result = numerator / denominator;

  return result;
}
