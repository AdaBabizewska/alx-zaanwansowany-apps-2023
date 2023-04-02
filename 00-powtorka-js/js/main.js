console.log("Hello World")

// Napisz funkcje o nazwie getTheOldestPerson, ktora obliczy, ktora osoba jest najstarsza w podanej tablicy obiektow. Imie osoby najstarszej, wypisz w konsoli

// Gotowe rozwiazanie wrzuc na GIT i wyslij link.

const people = [
    {
      name: "Michał",
      age: 12
    },
    {
      name: "Damian",
      age: 10
    },
    {
      name: "Wiktoria",
      age: 14
    },
    {
      name: "Agata",
      age: 8
    }
  ]
  
  let max = people[0];


    for (let person of people) {
        console.log(person)
        if (max.age<person.age) {
            max = person;
        }
    }

    console.log(max.name)

  // Final Output:
  
  // Wiktoria