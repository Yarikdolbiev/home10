type ReturnTypeFromFunction<T> = T extends (...args: any[]) => infer R ? R : never;


function add(a: number, b: number): number {
  return a + b;
}
type ResultType = ReturnTypeFromFunction<typeof add>;





type ReturnTypeAndParameter<T> = T extends (param: infer P) => infer R ? [R, P] : never;


function greet(name: string): string {
  return `Hello, ${name}!`;
}

type GreetInfo = ReturnTypeAndParameter<typeof greet>;

  