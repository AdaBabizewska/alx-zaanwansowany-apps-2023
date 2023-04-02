// Napisz kod slidera

// 1. Stworz sobie pusta tablice images

images = [];

// 2. Do tablicy images dodaj adresy zdjec pieskow z internetu

images.push ("https://i1.kwejk.pl/k/obrazki/2022/04/Jm6lhjIWhASb4T52.jpg","https://i.ytimg.com/vi/JM-O17rQMOc/hqdefault.jpg","https://i1.sndcdn.com/artworks-000429017043-z91v3d-t500x500.jpg","https://i.ytimg.com/vi/lj9O-IRwIBY/maxresdefault.jpg","https://nypost.com/wp-content/uploads/sites/2/2022/12/worlds-cutest-dog-6.jpg","https://bemorepanda.com/files/2020-08-04/images/782281.jpeg")
//   -> Hint: aby wziac zdjecie pieska z internetu, wejdz na google images, kliknij prawy przycisk i wybierz Copy Image Adress
// 3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0

let counter = 0;

// 4. po zaladowaniu pliku JS, dodaj elementowi img atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1

const photo = document.querySelector('#photo');
photo.src = images[0];

// 5. po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy

const buttonNext = document.querySelector('#buttonNext');
const handleTitleClick = () => {
    counter = counter + 1;
    photo.src = images[counter]
}
buttonNext.addEventListener('click',handleTitleClick)

// 6. po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy

const buttonNext = document.querySelector('#buttonNext');
const handleTitleClick = () => {
    counter = counter + 1;
    photo.src = images[counter]
}
buttonNext.addEventListener('click',handleTitleClick)

// 7. po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw 1 zdjecie
// 8. po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie