import { useState, ChangeEvent } from 'react';
import RenderMoviesTable from '../movieTable/movieTable';
import './searchBarStyle.css';

function SearchBar(){
  const [searchTerm, setSearchTerm] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    setSearchTerm(event.target.value);
  };

  function handleSearch(){
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
        <div>
        <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Digite sua pesquisa..."
        />
        <button onClick={handleSearch}>Pesquisar</button>
        </div>
        <RenderMoviesTable />
    </>
  );
};

export default SearchBar;
