const numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('Оцени шлюха!!!', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('Оцени шлюха!!!', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);