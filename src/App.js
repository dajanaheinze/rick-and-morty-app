import {useState} from "react";
import SearchBar from "./SearchBar";
import getCharactersBySearch from './services/getCharactersBySearch';
import getCharacterDetails from './services/getCharacterDetails';
import Character from './Character';
import CharacterDetails from './CharacterDetails';
import styled from 'styled-components/macro';
import fingerGif from './assets/tenor.gif';

export default App;

function App() {
  const [characters, setCharacters] = useState([])
  const [characterDetails, setCharacterDetails] = useState([])
  
  function showSearchedCharacters(searchedCharacter) {
    getCharactersBySearch(searchedCharacter)
      .then(data => setCharacters(data.results ? data.results : [{ name : `Sorry, there is no character called "${searchedCharacter}".`, id: null, image: fingerGif }]))
  }

  function showCharacterDetails(characterId) {
    getCharacterDetails(characterId)
      .then(data => setCharacterDetails(data))
  }
  return (
    <AppStyled className="App">
      
      <CharacterDetails characterDetails={characterDetails}/>
      
      {characters.map(({id, name, image}) => {
        return <Character key={id} name={name} imageUrl={image} onClick={() => showCharacterDetails(id)} />
      })}

      <SearchBar onSearch={showSearchedCharacters} /> 
    </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
  max-width: 600px;
  position: relative;
  padding-bottom: 160px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`


