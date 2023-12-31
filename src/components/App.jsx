import '../styles/App.scss';
import getDataFromApi from '../services/api';
import localStorage from '../services/localStorage';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import Filters from './Filters';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';

const App = () => {
  const [allMovies, setAllMovies] = useState(
    localStorage.get('allMoviesLS', [])
  );

  const [titleFilter, setTitleFilter] = useState(
    localStorage.get('titleFilterLS', '')
  );
  const [yearFilter, setYearFilter] = useState('');

  useEffect(() => {
    if (allMovies.length === 0) {
      getDataFromApi().then((cleanData) => {
        setAllMovies(cleanData);
      });
    }
  }, []);

  useEffect(() => {
    localStorage.set('allMoviesLS', allMovies);
  }, [allMovies]);

  useEffect(() => {
    localStorage.set('titleFilterLS', titleFilter);
  }, [titleFilter]);

  const handleChangeInput = (value) => {
    setTitleFilter(value);
  };

  const handleChangeSelect = (value) => {
    setYearFilter(value);
  };

  const handleResetButton = (value) => {
    setTitleFilter(value);
    setYearFilter('');
  };

  const filteredMovies = allMovies
    .filter((eachMovie) =>
      eachMovie.movie.toLowerCase().includes(titleFilter.toLowerCase())
    )
    .filter((eachMovie) => {
      if (yearFilter === '') {
        return true;
      } else {
        return yearFilter === eachMovie.year.toString();
      }
    });

  filteredMovies.sort((a, b) => a.movie.localeCompare(b.movie));

  const getYears = () => {
    const years = allMovies.map((eachMovie) => eachMovie.year);
    const listOfYears = new Set(years);
    const uniquesYearsArray = [...listOfYears];
    return uniquesYearsArray;
  };

  const { pathname } = useLocation();
  const routeData = matchPath('/movie/:id', pathname);

  const movieId = routeData !== null ? routeData.params.id : null;

  const selectedMovie = allMovies.find((item) => item.id === parseInt(movieId));

  return (
    <>
      <header className="header">
        <h1 className="title-one">Owen Wilson's</h1>
        <p className="title-two">❝wow!❞</p>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  titleFilter={titleFilter}
                  yearFilter={yearFilter}
                  handleChangeInput={handleChangeInput}
                  handleChangeSelect={handleChangeSelect}
                  years={getYears()}
                  handleResetButton={handleResetButton}
                />

                <MovieSceneList
                  filteredMovies={filteredMovies}
                  titleFilter={titleFilter}
                  yearFilter={yearFilter}
                />
              </>
            }
          />

          <Route
            path="/movie/:id"
            element={<MovieSceneDetail selectedMovie={selectedMovie} />}
          />

          <Route
            path="/*"
            element={
              <section className="page-error">
                <p className="page-error__message">
                  Upps! Parece que la ruta que has introducido no es correcta.
                </p>
                <Link className="page-error__return" to="/">
                  <i class="page-error__return--home fa-solid fa-house home"></i>
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer__div">Owen Wilson's "Wow!" ©2023</div>
      </footer>
    </>
  );
};

export default App;
