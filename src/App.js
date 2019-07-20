import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    });
    const data = await response.json();
    // console.log(data.hits);
    setRecipes(data.hits);

  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">BonaPetit!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">BonaPetit <span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">BonaPetit</a>

              </div>
            </li>
          </ul>
        </div>
      </nav>


      <div className="App container">
        <form onSubmit={getSearch} className="search-form">
          <input type="text" onChange={updateSearch}
            className="search-bar"
            value={search} />
          <button
            type="submit" className="search-button btn btn-secondary">Search</button>
        </form>
        <div className="content">
          {recipes.map(recipe => (
            <Recipe
              key={Math.random(recipe.recipe.totalWeight)}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              healthLabels={recipe.recipe.healthLabels}
              dietLabels={recipe.recipe.dietLabels}
              source={recipe.recipe.source}
              totalNutrients={recipe.recipe.totalNutrients}
            />
          ))}
        </div>
      </div>

      <footer className="page-footer navbar navbar-dark bg-dark">
        <div className="footer-copyright text-center">© 2019 Copyright:
    <a href="#"> BonaPetit</a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
