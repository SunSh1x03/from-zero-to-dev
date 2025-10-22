test("nome do teste", callbackFuction);

function callbackFuction() {
  console.log("Esta função esta sendo chamada?");
}

test("nome do teste", function () {
  console.log("E assim funciona?");
});

test("nome do teste", () => {
  console.log("e agora?");
});

test("testando outra condição do meu sistema", () => {
  console.log("testando");
});

test("Espero que 1 seja 1", () => {
  expect(1).toBe(1);
});

const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
