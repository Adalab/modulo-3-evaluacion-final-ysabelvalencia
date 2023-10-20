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

  const filteredMovies = allMovies.filter((movie) =>
    movie.movie.toLowerCase().includes(titleFilter.toLowerCase())
  );

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
                  handleChangeInput={handleChangeInput}
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
