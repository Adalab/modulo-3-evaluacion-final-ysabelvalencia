import '../styles/App.scss';
import getDataFromApi from '../services/api';
import ls from '../services/localStorage';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

const App = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setAllMovies(cleanData);
      console.log(cleanData);
      // Con esto me aparece el listado limpio que me da el api con las 50 pelis.
    });
  }, []);

  return (
    <>
      <header>Owen Wilson's Wow</header>
      <main>
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

        <section>
          <ul>Aqui se van a pintar los li con cada tarjeta</ul>
        </section>
      </main>
    </>
  );
};

export default App;
