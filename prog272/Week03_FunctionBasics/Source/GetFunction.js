function MyFunction() { }

MyFunction.prototype.three = 3;
MyFunction.prototype.four = 4;
MyFunction.prototype.str = "test";

MyFunction.prototype.getSeven = function() {
    'use strict';
    return 7;
};
MyFunction.prototype.getSix = function() {
    'use strict';
    return 6;
};
MyFunction.prototype.getEight = function() {
    'use strict';
    return 8;
};

module.exports.MyFunction = MyFunction;

// Global tests. This is an aside, but some might find it interesting.
// It shows that a require module prevents variables from accidentally
// escaping into the global namespace.

// Here is how to get a variable to escape into the global namespace
// You should, literally, never do this.
global.foo = 'Foo';

// This variable will stay local to this module. It will not be global and
// will not escape into the global namespace.
var bar = 'bar';



