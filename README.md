# Owen Wilson's Wow


Hey there! Welcome to the "Owen Wilson's wow! " website! 

This is a tribute to the renowned american actor Owen Wilson and his iconic catchphrase "Wow." 

This website is also,¡ the final project for Module 3 (React) of the Adalab Front Devel as assigned by the Adalab instructors.


## How to Use:
- Access the Website: Visit the "Owen Wilson's Wow Compilation" and enjoy a collection of 50 movies featuring Owen Wilson and his memorable "Wow" moments.

- Browse the Compilation: Scroll through the list of movies to see which ones include Owen Wilson's famous "Wow" line.

- Filter Movies: Use the search bar to search for specific movie titles or filter movies by release year.

- Enjoy the Wow Moments: Click on a movie to view Owen Wilson's "Wow" moment from that film.


## Technologies used:

- HTML
- Sass
- Javascript
- React framework
- JSX
- Interactions with the user
- API request

## Requiriments to be respected:

1. Initial state. When loading the page, all movies must appear in the main section, using an API request to obtain all the data. The service for the request can be found in https://owen-wilson-wow-api.onrender.com/wows/random?results=50. 
   
   For each movie obtained in the result, a card with the following information must be rendered: 
     - Poster
     - Movie title
     - Full line
     - Year
  
2. Search by name( input). The user can search movies by their title, filling the input, whether the introduced text is in lowercase or uppercase.
3.  Search by year (select). The user can search movies by their year, choosing one option from de list.

4. Components. Minimum components should be:
   - Filters: responding to the search by name and search by year filters.
   - MovieSceneList: responding to the all movies list.
   - MovieSceneItem: responding to each item in the all movies list.
   - MovieSceneDetail: responding to the detail page with specific information for each movie.

5. MovieSceneDetail. When clicking in a movie card, its information will appear in full screen mode. To do so, Routes and Link from 'react-router-dom' library must be implemented, creating static and dynamic routes. 
   
   In this page appears:
     - Poster
     - Movie title
     - Full line
     - Director
     - Audio clip of the wow scene

6. General details. 
   - If the user presses intro when typing in the search by title input, whe should prevent the browser from refreshing or changing the URL.
   - If no movie responds to the user's search by name, a text should appear with the following message or similar:
   
     > There is no movie title that matches the word "vhgfh".
   - The title filter must work whether the user introduces text in lowercase or uppercase.
   - When entering in the detail of a movie and going back to the homepage, the input must show the user's previous search.

Bonus

1. Improve design. Open to creativity with a responsive design for smaller devices.
   
2. Supported URL. The URL for each movie must be supported, meaning that if the user types directly the address in her or his browser, the site will still work. If the searched URL does not exist, an error message should appear on the screen.


## Steps to follow if you want to use this project in your computer

This project has been developed with a React Starter Kit, where a series of pre-installed and pre-configured tools and dependencies are available to optimize and organize the project.

To be able to work with it, you will have to follow the next steps:

Create your repository.
Copy all project files in the root file of your repository.
Open the shell command and install all necessary dependencies listed here below:

> npm install
> 
> npm install node-sass
> 
> npm install react-router-dom

Once all dependencies have been installed, you will be able to run the project typing in the shell command:

> npm run dev

then open de url generated or press h + o.


## Author

[![Autor](https://img.shields.io/badge/-%20Ysabel%20Valencia%20-%20pink?logo=github&labelColor=grey&color=rgb(59%2C%202%2C%2061))](https://github.com/ysabelvalencia)
