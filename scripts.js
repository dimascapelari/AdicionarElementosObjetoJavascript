// =
const a = 1;
const person = {};
person.name = "Dimas";
person.age = 40;

console.log(person);

// []
const car = {
  rodas: 4,
  portas: 4,
};

car["cor"] = "Vermelho";

console.log(car);

const nomePropriedade = "portas";
car[nomePropriedade] = 2;

console.log(car);
console.log(nomePropriedade);

// Object => defineProperty
Object.defineProperty(car, "motor", {
  value: 1.4,
  writable: false, //não deixa subistituir o valor
});
console.log(car);

// defineProperties
const pessoa = {};
Object.defineProperties(pessoa, {
  nome: {
    value: "Mariana",
    writable: false,
  },
  idade: {
    value: 37,
    writable: true,
  },
  profissao: {
    value: "Programadora",
    writable: false,
  },
});

console.log(pessoa);
