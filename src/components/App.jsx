import '../styles/App.scss';
import getDataFromApi from '../services/api';
import localStorage from '../services/localStorage';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import Filters from './Filters';
import MovieSceneList from './MovieSceneList';

const App = () => {
  const [allMovies, setAllMovies] = useState(
    localStorage.get('allMoviesLS', [])
  );

  const [titleFilter, setTitleFilter] = useState('');

  const [yearFilter, setYearFilter] = useState('');

  useEffect(() => {
    if (allMovies.length === 0) {
      getDataFromApi().then((cleanData) => {
        setAllMovies(cleanData);
        localStorage.set('allMoviesLS', cleanData);
      });
    }
  }, []);

  const handleChangeInput = (value) => {
    setTitleFilter(value);
  };

  const handleChangeSelect = (value) => {
    setYearFilter(value);
  };

  const filteredMovies = allMovies
    .filter((eachMovie) => eachMovie.movie.toLowerCase().includes(titleFilter))
    .filter((eachMovie) => {
      if (yearFilter === '') {
        return true;
      } else {
        return yearFilter === eachMovie.year.toString();
      }
    });

  const getYears = () => {
    const years = allMovies.map((eachMovie) => eachMovie.year);
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    return uniquesArray;
  };

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
                />

                <MovieSceneList allMovies={filteredMovies} />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
