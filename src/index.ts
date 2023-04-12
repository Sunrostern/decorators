// Method Logging Decorator
function LogMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  // Replace the original method with a new function that wraps the original method.
  descriptor.value = function (...args: any[]) {
    console.log(`Calling method '${propertyKey}' with arguments:`, args);

    // Call the original method with the provided arguments and store the result.
    const result = originalMethod.apply(this, args);

    console.log(`Method '${propertyKey}' returned:`, result);
    return result;
  };

  return descriptor;
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }

  @LogMethod
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calculator = new Calculator();
const sum = calculator.add(2, 3);
const product = calculator.multiply(4, 5);