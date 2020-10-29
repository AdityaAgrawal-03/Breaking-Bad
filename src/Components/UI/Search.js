
import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  function handleOnChange(q) {
    setText(q);
    getQuery(q);
  }

  return (
    <div className="search">
      <form>
        <input 
          type="text" 
          className="form-control"
          placeholder="say my name"
          value={text}
          onChange={e => handleOnChange(e.target.value)}
          onBlur={e => setText(e.target.value)}
        />
      </form>
      
    </div>
  );
}

export default Search;