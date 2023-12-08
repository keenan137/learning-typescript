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
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
// Tuples
let person: [string, number, boolean] = ['mario', 30, true];

// Examples
// 1.
let hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1];

// 2.
let xy: [number, number];
xy = [93.2, 20.1];


// 3.
function useCoords(): [number, number]{
    //get coords

    const lat = 100;
    const long = 50

    return [lat, long];
}
const [lat, long] = useCoords();
//----------------------------------------------------------------
//----------------------------------------------------------------
// Named Tuples
let userArr: [name: string, age: number]
userArr = ['peach', 25];
console.log(userArr[0])
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
// Interfaces
interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {name: 'Mario', avatar: 'img.mario.png'};

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
//----------------------------------------------------------------
// As Function Arguments
function createPost(post: Post): void{
    console.log(`Created post ${post.create_at} by ${post.author.name}`);
}
createPost(newPost)
//----------------------------------------------------------------
// Interfaces with Arrays
let posts: Post[] = []
posts.push(newPost);