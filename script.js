'use srtict';

let numberOfFilms = prompt('Скільки фільмів ви вже переглянули?');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

let i;
let filmPrompt = () => {
	for (i = 0; i < 2; i++) {
		let lastFilm1 = prompt('Один з останніх фільмів?');
		let rateFilm = prompt('Оцініть його?');
		personalMovieDB.movies[i] = `${lastFilm1}: ${rateFilm}`;
	}
};
filmPrompt();

// console.log(personalMovieDB);
