/*
// this kulcsszó
function sayThis() {
    console.log('this', this);
}

sayThis();

const coffe = {
    cafeName: "JJ Beans",
    print: function() {
        console.log(this.cafeName);
    },
};

coffe.print();

coffe.sayHy = function() {
    console.log('ráakaszt ' +this.cafeName);
}

coffe.sayHy();

function Dog(breed) {
    this.breed = breed;

    this.sayBreed = function() {
        console.log(this.breed);
    }
}

const tofu = new Dog("Golden Retriever")  //példányosítás Objektumsaoblon alapján jön létre 

tofu.sayBreed();


const rabbit = {
    name: "White Rabbit"
};

function concatName(string) {
    return string + this.name;
}

// indirect invitation
console.log(concatName.call(rabbit, "Hello"));



const coffe2 = {
    cafeName: "JJ Bean",
    coffeTypes: ["espresso", "drip", "pourover", "americano"],
    printMenu: function() {
        const _self = this; // a this már az obketumra mutat
        this.coffeTypes.forEach(function(current) {  // nem egy objektum meódus hanem egy egyszerű fv
            console.log(_self.cafeName + " " + current);
        });
    },
};

coffe2.printMenu();

const coffe3 = {
    cafeName: "JJ Bean",
    coffeTypes: ["espresso", "drip", "pourover", "americano"],
    printMenu: function() {
        this.coffeTypes.forEach(function(current) {  // nem egy objektum meódus hanem egy egyszerű fv
            console.log(this.cafeName + " " + current);
        }.bind(this))
    },
};

coffe3.printMenu();

*/

// 1 Write a code to get array of names from given array of users
// 2 Get back only active users
// Sort users by age descending
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30,
    },
];

/*
const names = [];

for(let i = 0; i < users.length; i++) {
    names.push(users[i].name);
}

console.log(names);

*/

/*
const names = [];

users.forEach(user => {
    names.push(user.name);
});

console.log(names);
*/

/*

const userArray = users.map(user => {
    return user.name;
});

console.log(userArray);
*/

/*
const names = [];

for(let i = 0; i < users.length; i++) {
    if(users[i].isActive) {
        names.push(users[i].name);
    }
}

console.log(names);

*/

/*
const names = [];

users.forEach(user => {
    if(user.isActive) {
        names.push(user.name);
    }
});

console.log(names);
*/

/*
const userArray = users.filter(user => user.isActive).map(user => user.name);
console.log(userArray);

*/

/*
users.sort((user1, user2) => (user1.age < user2.age ? -1 : 1));

const usersArray = users.map(user => {
    return user.name;
});



const Array = users
.sort((user1, user2) => (user1.age > user2.age ? -1 : 1))
.filter(user => user.isActive)
.map(user => user.name);

console.log(Array);
*/

// What will be loged in first example and in second example?

/*
let var1;
console.log(var1);
console.log(typeof var1);

let var2 = null;
console.log(var2);
console.log(typeof var2);
*/

// What will be console.logeed here?
// Question 1
/*
console.log(foo);
foo = 1;
*/

// Question 2
/*
console.log(foo);
var foo = 2;
*/

// Question 3
/*
foo = 3;
console.log(foo);
var foo;
*/

// Create a counter function withc has increment and getValue funcionality

/*
const privateCounter = () => {
    let count = 0;

    return {
        increment: (val = 1) => {
            count += val;
        },
        getValue: () => {
            return count
        },
    };
};

const counter = privateCounter()
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
*/

/*
const privateSecret = () => {
    const secret = 'foo';

    return () => secret;
}

const getSecret = privateSecret();
console.log(getSecret());
*/

// Write a function which get's array and an element and returns a array with this element at the end

/*
const numbers = [1, 2];

const append = (arr, el) => {
    //spread operátor használata
    return [...arr, el];
    //arr.push(el); // minden tömböt megváltoztat
    return arr;
};

const newNumbers = append(numbers, 3);
console.log(newNumbers);
console.log(numbers);

*/

// Remove all duplicates in the array

/*
const array = [1, 1, 2];

const uniqueArr = arr => {
    const result = [];
    arr.forEach(item => {
        if(!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
};

console.log(uniqueArr(array));
*/

/*
const uniqueArr = array => {
    return array.reducer((acc, el) => {
        return acc.includes(el) ? acc : [...acc, el];
    }, [])
}

*/

// Sort the array of numbers

const arr = [3, 5, 1];
const result = arr.sort((a, b) => (a < b ? -1 : 1));
console.log(arr, result);

// sort array of objects by author's last name

const books = [
    {name: "Harry Potter", author: "Joanne Rowling"},
    {name: "Warcross", author: "Marie Lu"},
    {name: "The Hunger Games", author: "Suzanne Collins"},
];

books.sort((book1, book2) => {
    const authorLastName1 = book1.author.split(" ")[1];
    const authorLastName2 = book2.author.split(" ")[1];
    return authorLastName1 < authorLastName2 ? -1 : 1;
})

console.log(books);
