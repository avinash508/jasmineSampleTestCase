function Calculator() {}

Calculator.prototype.add = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number'){
    return a + b;
  } else {
    throw new Error('calculator error');
  }
};

// Calculator.prototype.subtract = function(a, b) {
//   return a - b;
// };

// Calculator.prototype.multiply = function(a, b) {
//   return a*b;
// };

// Calculator.prototype.divide = function(a, b) {
//   if(b === 0 || b === undefined) {
//     return NaN;
//   }
//   return a/b;
// };

// function ScientificCalculator() {}

// ScientificCalculator.prototype = Calculator.prototype;

// ScientificCalculator.prototype.sin = function(rads) {
//   return Math.sin(rads);
// };

// ScientificCalculator.prototype.cos = function(rads) {
//   return Math.cos(rads);
// };

// ScientificCalculator.prototype.tan = function(rads) {
//   return Math.tan(rads);
// };

// ScientificCalculator.prototype.log = function(val) {
//   return Math.log(val);
// };

// var withExponents = function() {
//   this.pow = function(a, b) {
//     return Math.pow(a, b);
//   };
//   this.multiplyExp = function(a, b) {
//     return Math.pow(a[0], a[1])*Math.pow(b[0], b[1]);
//   };
//   this.divideExp = function(a, b) {
//     return Math.pow(a[0], a[1])/Math.pow(b[0], b[1]);
//   };
// };


// function delay(time, instance, method, args) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       var fn = calculator[method];
//       if(fn !== undefined) {
//         resolve(fn.apply(args));
//       } else {
//         reject(new Error('No such method'));
//       }
//     }, time);
//   });
// }