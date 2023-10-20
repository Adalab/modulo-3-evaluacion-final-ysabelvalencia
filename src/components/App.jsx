import '../styles/App.scss';
import getDataFromApi from '../services/api';
import localStorage from '../services/localStorage';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import MovieSceneList from './MovieSceneList';

const App = () => {
  const [allMovies, setAllMovies] = useState(
    localStorage.get('allMoviesLS', [])
  );

  useEffect(() => {
    if (allMovies.length === 0) {
      getDataFromApi().then((cleanData) => {
        setAllMovies(cleanData);
        localStorage.set('allMoviesLS', cleanData);
      });
    }
  }, []);

  console.log(allMovies);

  return (
    <>
      <header>Owen Wilson's Wow</header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <form>
                  <label htmlFor="search-film">
                    Título de la película
                    <input
                      type="text"
                      name="search-film"
                      // value=""
                      // id=""
                      // onChange={}
                    />
                  </label>
                  <label htmlFor="search-year">
                    Año de la película
                    <select
                      name="search-year"
                      // id=""
                      // value={}
                      // onChange={}
                    >
                      <option
                      // selected
                      // value=""
                      >
                        Todos
                      </option>
                    </select>
                  </label>
                </form>

                <MovieSceneList allMovies={allMovies} />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
