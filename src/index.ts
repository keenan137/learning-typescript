// Examples of explicitly setting some types
let age: number =  30;
let firstName: string = "Mario";
let isFictional: boolean;

let anyVar;
//----------------------------------------------------------------
//----------------------------------------------------------------
// Type Inference - TypeScript will guess intelligently for us.
let planet = 'Earth';
let moons = 1;
let isLarge = false;
//----------------------------------------------------------------
//----------------------------------------------------------------
// null & undefined properties (not very useful but is possible)
let something: null = null;
let anotherThing: undefined = undefined;
//----------------------------------------------------------------
//----------------------------------------------------------------
// Arrays (also has type inference)
let names: string[] = ["apples"];
// names.push(39);
names.push("test");

let anyArray: any[] = [];
//----------------------------------------------------------------
//----------------------------------------------------------------
// Object Literals (also has type inference)
let user: {
    name: string,
    age: number,
    id: number,
} = {
    name: 'Mario',
    age: 30,
    id: 1
}
//user.email = "luigi@gmail.com";
user.name = "Luigi";

let anyUser: any;
//----------------------------------------------------------------
//----------------------------------------------------------------
// Functions (also has type inference)
function addTwoNumbers(a: number, b: number){
    console.log(a+b)
    return a+b;
}
// addTwoNumbers(1, "2");
addTwoNumbers(1, 2);

const subtractTwoNumbers = (a: number, b: number): number => {
    console.log(a-b);
    return a-b;
}
// subtractTwoNumbers(5, true);
subtractTwoNumbers(5, 4);

function addAllNumbers(items: number[]): number {
    const total = items.reduce((a,b) => a+b, 0);
    console.log(total);
    return total;
};
// addAllNumbers([1,2,3,true]);
addAllNumbers([1,2,3,4]);

function addAny(value: any): any {
    return value + value;
}
//----------------------------------------------------------------
//----------------------------------------------------------------