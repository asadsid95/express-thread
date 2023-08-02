const personPrototype = {
    name: "John",
    address: {
        city: "New York",
        country: "USA"
    }
};

const john1 = Object.create(personPrototype);
const john2 = Object.create(personPrototype);

john1.address.name = "Los Angeles";

console.log(john1.address.name); // Output: "Los Angeles"
console.log(john2.address.name); 