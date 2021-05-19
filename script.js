const numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов?', ''),
          b = prompt('Оцени!!!', '');

          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
              personalMovieDB.movies[a] = b;
              console.log('all done!');
          } else {
              console.log('error');
              i--;
          } 
}

if (personalMovieDB.count < 10) {
    console.log("Мала!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Норми!!');
} else if (personalMovieDB.count >= 30) {
    console.log('Ебать ты задр!!!');
} else {
    console.log('напиши че нить!');
}

console.log(personalMovieDB);