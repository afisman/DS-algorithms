//LIFO

//functions: push, pop, peek, length

//Array as stack

let letters = [];

let word = 'racecar';

let rWord = '';

for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
    rWord += letters.pop();
}

if (word === rWord) {
    console.log(word + ' is a palindrome');
} else {
    console.log(word + ' is not a palindrome');
}


//Implement a Stack from scratch

let Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    this.peek = function () {
        return this.storage[this.count - 1];
    }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size())