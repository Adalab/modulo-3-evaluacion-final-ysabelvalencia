import '../styles/App.scss';
import getDataFromApi from '../services/api';
import localStorage from '../services/localStorage';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <header>Owen Wilson's Wow</header>
      <main>
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
                  allMovies={filteredMovies}
                  titleFilter={titleFilter}
                />
              </>
            }
          />

          <Route
            path="/movie/:id"
            element={<MovieSceneDetail selectedMovie={selectedMovie} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
