// Napisz funkcje o nazwie getTheOldestPerson, ktora obliczy, ktora osoba jest najstarsza w podanej tablicy obiektow. Imie osoby najstarszej, wypisz w konsoli
// const people = [
//     {
//       name: "Michał",
//       age: 12
//     },
//     {
//       name: "Damian",
//       age: 10
//     },
//     {
//       name: "Wiktoria",
//       age: 14
//     },
//     {
//       name: "Agata",
//       age: 8
//     }
//   ]
//   let max = people[0];
//     for (let person of people) {
//         console.log(person)
//         if (max.age<person.age) {
//             max = person;
//         }
//     }
//     console.log(max.name)

// 1. Mając tablicę imion, dopisz do niej swoje imie. Nastepnie za pomoca metody tablica.length - 1, wypisz w konsoli swoje imie.

const names20 = ['Damian', 'Pawel', 'Michal']
names20.push ("Adrianna");

for (i = 0; i<= names20.length - 1; i++) {
    if (names20[i] = "Adrianna" ) {
        console.log(names20[i])
    }
}

// 2. Majac obiekt buta, sprawdz czy rozmiar jest wiekszy od 42. Jesli jest, to wypisz w konsoli "To jest duzy but"

const shoe50 = {
  brand: "nike",
  color: 'white',
  size: 40
}

if (shoe50.size>42) {
    console.log("To jest duży but")
}

else {
    console.log ("To nie jest duży but")
}

// 3. Majac tablice produktów, oblicz sumę produktów, których kategoria to owoce
const products = [
  {
    name: 'jablko',
    category: 'fruits',
    price: 2.00
  },
  {
    name: 'kawa',
    category: 'other',
    price: 7.25
  },
  {
    name: 'banan',
    category: 'fruits',
    price: 4.99
  }
]

let sumaProduktow = 0;

for (i = 0; i < products.length; i++) {
    if (products[i].category == 'fruits') {
        sumaProduktow = sumaProduktow + products[i].price
    }
    console.log(sumaProduktow)
}

// 4. Napisz funkcje sumProducts, ktora przyjmie tablice obiektow products z zadania 3, a nastepnie zwroci sume wszystkich produktow

suma = 0;
for (product of products) {
    suma = suma + product.price;
}
console.log(suma)

