
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/UI/Header';
import Search from './Components/UI/Search';
import Characters from './Components/CharacterGrid/Characters';
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      //this line returns a promise
      // const result = await fetch(`https://www.breakingbadapi.com/api/characters`);
      // const data = await result.json();
      // console.log(data);

      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data);

      setCharacters(result.data);
      setIsLoading(false);
    }

    fetchCharacters();
  }, [query]);
  // passing [] as second arg tells react to run the effect only once, 

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Characters characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
