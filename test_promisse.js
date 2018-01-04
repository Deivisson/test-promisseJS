const resolved = true;

var promise = new Promise((resolve, reject) => {

  // timeout para simular operação assincrona
  setTimeout(() => {
    if (resolved) {
      resolve("Resolvido com sucesso !!")
    } else {
      reject("Rejeitado !!!");
    }
  }, Math.random() * 2000 + 1000);
});

promise.then(
  resolved => console.log(resolved),
  error => console.log(error)
);

console.log("Fim da Function");
