# javaScript and classes 

## OOP(object oriented programming ): programming paradyme

## object 
- collection of properties and methods
- toLowerCase

## why use OOP 

## parts of OOP
Object literal

- constructor function
- prototypes
- Instances(new, this)

## 4 pillars 
Abstraction

1. Abstraction
    Abstraction is about hiding the complex implementation details and showing only the essential features of an object. It allows a programmer to interact with an object at a higher level without needing to understand its internal workings.

example:

class Car {
  // Constructor to initialize properties

  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method that provides a high-level abstraction
  startEngine() {
    console.log(`${this.make} ${this.model} engine started.`);
  }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.startEngine(); // Output: Toyota Corolla engine started.

Here, startEngine abstracts away the details of how the engine is started. Users of the Car class don’t need to know how the engine starts; they just use the startEngine method.

2. Encapsulation
Encapsulation involves bundling the data (properties) and methods that operate on the data into a single unit, typically a class. It also involves restricting access to some of the object's components, which helps in protecting the internal state of the object from unintended modifications.

Example in JavaScript:

class BankAccount {
  // Private property
  #balance;

  // Constructor to initialize the balance
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    }
  }

  // Method to get the balance
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50); // Deposited 50. New balance: 150
myAccount.withdraw(30); // Withdrew 30. New balance: 120
console.log(myAccount.getBalance()); // 120
In this example, #balance is a private field, meaning it’s not accessible directly from outside the class. Methods like deposit, withdraw, and getBalance provide controlled access to the #balance, demonstrating encapsulation.

3. Inheritance
Inheritance allows a class to inherit properties and methods from another class. This helps in reusing code and establishing a natural hierarchy between classes.

Example in JavaScript:

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Derived class
class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog('Rex');
myDog.speak(); // Rex makes a sound.
myDog.bark();  // Rex barks.
In this example, Dog inherits from Animal. Therefore, Dog has access to the speak method defined in Animal and also has its own method, bark.

4. Polymorphism
Polymorphism allows different classes to be treated through the same interface, often through method overriding. This means that different classes can have methods with the same name but different implementations.

Example in JavaScript:

class Animal {
  speak() {
    console.log('Animal makes a sound.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks.');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Cat meows.');
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();
}

const myDog = new Dog();
const myCat = new Cat();

makeAnimalSpeak(myDog); // Dog barks.
makeAnimalSpeak(myCat); // Cat meows.
In this example, both Dog and Cat override the speak method from Animal. The makeAnimalSpeak function can take any Animal object and call speak on it, demonstrating polymorphism.

Each of these concepts helps in organizing and managing code effectively, and they work together to create robust and flexible object-oriented systems.