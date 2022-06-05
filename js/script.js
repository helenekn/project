const user = "Helene";
alert(`Hello ${user}!`);

const numberOfFilma = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilma,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
};

const a = prompt("Один из последних просмотренных фильмов", ""),
  b = prompt("На сколько оцените его", ""),
  c = prompt("Один из последних просмотренных фильмов", ""),
  d = prompt("На сколько оцените его", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
