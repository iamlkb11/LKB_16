/**
 * Method Decorator
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * [MethodDecorator description]
 * @param {Object}                       target      [description]
 * @param {string}                       propertyKey [description]
 * @param {TypedPropertyDescriptor<any>} descriptor  [description]
 */
function MethodDecorator(target, // The prototype of the class
    propertyKey, // The name of the method
    descriptor) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
var MethodDecoratorExample = (function () {
    function MethodDecoratorExample() {
    }
    MethodDecoratorExample.prototype.method = function () {
    };
    return MethodDecoratorExample;
}());
__decorate([
    MethodDecorator
], MethodDecoratorExample.prototype, "method", null);