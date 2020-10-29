import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
        <img src={character.img} alt="faces of characters" />
        </div>
        <div className="card-back">
          <h1>{character.name}</h1>
          <ul>
            <li>Portrayed by: {character.portrayed}</li>
            <li>Nickname: {character.nickname}</li>
            <li>Alive or not? {character.status}</li>
            <li>Occupation: {character.occupation.toString()}
            </li>
          </ul>
        </div>
        </div>
    </div>
  );
}

export default CharacterCard;