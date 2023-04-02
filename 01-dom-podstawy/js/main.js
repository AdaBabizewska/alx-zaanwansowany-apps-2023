// console.log("Hello DOM")

// // Za pomoca kodu JS wykonaj następujące zadania.
// // Pamietaj, aby elementom HTML dodawac ID.

// // 1. W konsoli wypisz obecny tekst przycisku

// // const button = document.querySelector('#button')
// // console.log(button.innerText);

// // // 2. dodaj formularzowi klase my-form

// // formularz.classList.add('my-form')

// // 3. Za pomoca JS dodaj do inputow jakis tekst

// const imie = document.querySelector('#imie')
// imie.value = 'Przykładowe imię';

// const wiadomosc = document.querySelector('#wiadomosc')
// wiadomosc.value = 'Przykładowa wiadomość';

// // 4. do elementu ul dodaj element li
//     {/* <li>
//       <strong>Ada</strong> napisala
//       <p> Super dzien. Duzo sie nauczylam </p>
//     </li> */}

//     const lista = document.querySelector('#lista')
//     lista.innerHTML += `
//     <li>
//     <strong>Ada</strong> napisala
//     <p> Super dzien. Duzo sie nauczylam </p>
//     </li>
//     `

// // 5.  Majac tablice obiektow messages, za pomoca petli dodaj do ul kilka elementow li

// const messages = [
//   {
//     author: 'Pawel',
//     message: 'Ale dzisiaj super dzien'
//   },
//   {
//     author: "Magda",
//     message: "Zimno jest"
//   }
// ]

// for (i = 0; i<messages.length; i++) {
//     lista.innerHTML += `
//     <li>
//     <strong>${messages[i].author}</strong> napisala
//     <p> ${messages[i].message}</p>
//     </li>
//     `
// }


// // Eventy
// Glowne Eventy:

// click
// submit

// Wzor eventu

// const handleTitleClick = () => {
//   console.log('h1 zostal klikniety');
// }

// title.addEventListener('click', handleTitleClick);

const messageForm = document.querySelector('#messageForm');
const nameInput = document.querySelector('#nameInput');
const messageInput = document.querySelector('#messageInput');
const list = document.querySelector('#list');

// event jest to wbudowany obiekt, ktory przetrzymuje informacji o wykonanym zdarzeniu
const handleSubmit = (event) => {
  // event.preventDefault() powoduje zatrzymanie domyslnej akcji przegladarki jaka jest wyslanie formularza.
  event.preventDefault();

  // 1. Pobranie wartosci z inputow
  // console.log(nameInput.value)
  // console.log(messageInput.value);

  // 2. Dodanie nowego elementu do HTML
  list.innerHTML += `
    <li>
      <strong> ${nameInput.value} </strong> napisal
      <p> ${messageInput.value} </p>
    </li>
  `

  nameInput.value = '';
  messageInput.value = '';
}

messageForm.addEventListener('submit', handleSubmit);

// Cwiczenie dla was:

// w HTML jest guzik "usun wszystkie elementy". Dodaj event, ktory po wcisnieciu guzika, usunie wszystkie elementy listy. UWAGA: po usunieciu listy, powinienem dalej moc dodawac nowe elementy

const usuwanie = document.querySelector('#usuwanie');
const handleTitleClick = () => {
    list.innerHTML = '';
}

usuwanie.addEventListener('click',handleTitleClick)
