export const MATH_OP_ADD = '+';
export const MATH_OP_SUBTRACT = '-';
export const MATH_OP_MULTIPLY = '*';
export const MATH_OP_DIVIDE = '/';

export const mathOperations = new Map([
  [MATH_OP_ADD, (x,y) => x + y],
  [MATH_OP_SUBTRACT, (x,y) => x - y],
  [MATH_OP_MULTIPLY, (x,y) => x * y],
  [MATH_OP_DIVIDE, (x,y) => x / y],
]);