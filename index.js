// class
class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  // method
  printName() {
    console.log(this.name);
  }
}
// child Class
class Dog extends Animal {
  constructor(name, age, color, breed) {
    super(name, age, color);
    this.breed = breed;
  }
  // methods
  printBreed() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}
const dog1 = new Dog("tom", "5yrs", "gray", "Labra");
console.log(dog1);
dog1.printName();
dog1.printBreed();
