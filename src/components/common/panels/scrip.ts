/**
 * Calculates the length of the hypotenuse using the Pythagorean theorem.
 * @param a The length of one side of the right triangle.
 * @param b The length of the other side of the right triangle.
 * @returns The length of the hypotenuse.
 */
export function calculatePythagoreanTheorem(a: number, b: number): number {
  return Math.sqrt(a * a + b * b);
}
