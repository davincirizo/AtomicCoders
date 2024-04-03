function fn(x: string): string;
// Return type isn't right
// function fn(x: number): boolean;
// This overload signature is not compatible with its implementation signature.
function fn(x: string | number) {
  return "oops";
}