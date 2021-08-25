// ES6 far arrow function
// function number(n) {
//     return n;
// }
// console.log(number())

//Single line condition
// const number = (m, n) => m + n;
// console.log(number(10, 20));

//Multiple line condition or operation
/* const addMultiply = (a, b) => {
    let result = a + b;
    result = result * 2;
    return result;
}
console.log(addMultiply(2, 2)); */

var javascript = {
    name: 'Javascript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibaries: function () {
        // console.log(this);
        this.libraries.forEach(function (a) {
            console.log(`${this.name} Loves ${a}`);
        })
    }
}

javascript.printLibaries();
