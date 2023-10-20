import React from 'react';
import '../styles/App.scss';

const App = () => {
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
              <option selected value="">
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
