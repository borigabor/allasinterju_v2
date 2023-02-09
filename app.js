
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