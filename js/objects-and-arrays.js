/* Arrays are actually objects!
They're a special type of object, and one of the very few name/value pairs
that allow the key to be a number.

Ex:
hotel[2];
*/

// Trying arrays in an object using object literal notation.

var drink = {
    drink1: 'small dragon fizzy',
    drink2: 'medium dragon fizzy',
    drink3: 'large dragon fizzy',
    prices: [1.85, 5.46, 3.56],
};

console.log("A " + drink.drink1 + " costs $" + drink.prices[1] + ".");

// ------------------------
// Trying arrays in an object with object constructor notation.

function Cookie(name, regularPrice, holidayPrice) {
    this.name = name;
    this.prices = [regularPrice, holidayPrice];
    this.prices = this.prices.map(a => a.toFixed(2));
};

var sugarCookie = new Cookie('sugar cookie', 1.50, 1.75);

console.log("A " + sugarCookie.name + " costs $" + sugarCookie.prices[0] +
            " on normal days.")

// Objects in an array..
// ------------------------
var cookieNames = [ // The structure is basically var Array = [{},{},{}];
                    // with object literal syntax inside.
    {name: 'sugar',
     quantity: 36},
    {name: 'cocoa',
     quantity: 32},
    {name: 'snickerdoodle',
     quantity: 23}
];

console.log("We currently have " + cookieNames[2].quantity + " " + cookieNames[2].name +
            " cookies available.");