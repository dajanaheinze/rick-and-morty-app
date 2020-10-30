import {useState} from "react";
import SearchBar from "./SearchBar";
import getCharacter from './services/getCharacter';
import Character from './Character';
import styled from 'styled-components/macro';
import finger from './assets/finger2.png';
import fingerGif from './assets/tenor.gif';

function App() {
  const [characters, setCharacters] = useState([])
  
  function showCharacter(searchedCharacter) {
    getCharacter(searchedCharacter)
      .then(data => setCharacters(data.results ? data.results : [{ name : `Sorry, there is no character called "${searchedCharacter}".`, id: null, image: fingerGif }]))

  }
  
  console.log(characters)
  return (
    <AppStyled className="App">
      {characters && characters.map(({id, name, image}) => {
        return <Character key={id} name={name} imageUrl={image} />
      } 
      
    )}
      
      <SearchBar onSearch={showCharacter} />
      
            
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


export default App;
