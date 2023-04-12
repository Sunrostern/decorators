"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Method Logging Decorator
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    // Replace the original method with a new function that wraps the original method.
    descriptor.value = function (...args) {
        console.log(`Calling method '${propertyKey}' with arguments:`, args);
        // Call the original method with the provided arguments and store the result.
        const result = originalMethod.apply(this, args);
        console.log(`Method '${propertyKey}' returned:`, result);
        return result;
    };
    return descriptor;
}
class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
__decorate([
    LogMethod
], Calculator.prototype, "add", null);
__decorate([
    LogMethod
], Calculator.prototype, "multiply", null);
const calculator = new Calculator();
const sum = calculator.add(2, 3);
const product = calculator.multiply(4, 5);
//# sourceMappingURL=index.js.map