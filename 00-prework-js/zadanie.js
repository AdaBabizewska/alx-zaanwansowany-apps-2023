
const products = [
    {
      name: 'banan',
      price: 4.99
    },
    {
      name: "chleb",
      price: 3.25
    },
    {
      name: 'ser',
      price: 7.00
    },
    {
      name: 'baton',
      price: 1.99
    }
  ]
  
  let sumaZakupy = 0;
  for (let y of products) {
    sumaZakupy = sumaZakupy + y.price
  }

  let liczbaProduktow = products.length
  let sredniaZakupow = sumaZakupy/liczbaProduktow

  console.log (sumaZakupy, liczbaProduktow, sredniaZakupow)