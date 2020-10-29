import React from 'react';
import CharacterCard from './CharacterCard';
import Spinner from '../UI/Spinner'

const Characters = ({ characters, isLoading }) => {
  return (  
      isLoading ? 
      <Spinner /> : 
      <section className="cards">
        {characters.map(character => (
          <CharacterCard key={character.char_id} character={character}/>
        ))}
      </section>
      
    )
  
};

export default Characters;