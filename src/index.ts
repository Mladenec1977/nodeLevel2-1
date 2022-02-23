// 1. 

function getFirstWord(a: string) {
	return a.split(/ +/)[0].length;
}

// 2. 

function getUserNamings(a: User) {
  return { 
		fullname: a.name + " " + a.surname, 
		initials: a.name[0] + "." + a.surname[0] 
	};
}

type User = {
    name: string;
    surname: string;
}

// 3. 

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a: Prod) {
  return a?.products?.map(prod => prod?.name) || [];
}

type Product ={
    name: string;
}

type Prod = {
    products: Product[];
}

// 4.1

// easy way is using 'as' keyword
// hard way is ?...
function hey(a: RazStrNom): string {
    return "hey! i'm " + a.name();
}
hey({name: () => "roma", cuteness: 100})
hey({name: () => "vasya", coolness: 100})


interface RazStrNom {
    name: () => string;
    type?: string;
    cuteness?: number;
    coolness?: number;
}

// 4.2
class Cat implements RazStrNom {

    catName: string;
    bool: boolean;

    constructor(catName: string, bool: boolean) {
        this.catName = catName;
        this.bool = bool;
    }

    public name() {
        return this.catName;
    }
}

class Dog implements RazStrNom {
    dogName: string;
    a: number;

    constructor(name: string, a: number) {
        this.dogName = name;
        this.a = a;
    }

    public name() {
        return this.dogName;
    }
}

function hey1(abstractPet: RazStrNom) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true)
let b = new Dog("gavchik", 333)
hey1(a)
hey1(b)



// 4.3

function hey3(a: RazStrNom) {
    return "hey! i'm " + a.name()
		 + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
}
hey3({name: () => "roma", type: "cat", cuteness: 100})
hey3({name: () => "vasya", type: "dog", coolness: 100})

// 5.

// google for Record type
function stringEntries(a: [] | object) {
   return Array.isArray(a) ? a : Object.keys(a)
}

// 6.

// you don't know Promises and async/await yet. Or do you? 
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a: number) {
    return "*".repeat(a)
}
const hello = async () => {
   return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))