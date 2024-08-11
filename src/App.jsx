import { useState, useEffect } from 'react';
import axios from 'axios';import React from 'react'; // Asegúrate de importar React

import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <div>
        <h1>Personajes de Rick and Morty</h1>
        <ul>
          {characters.map(character => (
            <div key={character.id}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <p>Especie: {character.species}</p>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
