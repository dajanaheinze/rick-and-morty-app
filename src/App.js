import {useState} from "react";
import SearchBar from "./SearchBar";
import getCharactersBySearch from './services/getCharactersBySearch';
import Character from './Character';
import CharacterDetails from './CharacterDetails';
import styled from 'styled-components/macro';
import fingerGif from './assets/tenor.gif';
import { Route, Switch, NavLink } from "react-router-dom";

export default App;

function App() {
  const [characters, setCharacters] = useState([])
  
  function showSearchedCharacters(searchedCharacter) {
    getCharactersBySearch(searchedCharacter)
      .then(data => setCharacters(data.results ? data.results : [{ name : `Sorry, there is no character called "${searchedCharacter}".`, id: null, image: fingerGif }]))
  }


  return (
    <AppStyled className="App">
      <Switch>
        <Route path="/CharacterDetails/:characterId">
          <CharacterDetails/>
        </Route>
        <Route path="/">
          {characters.map(({id, name, image}) => {
            return <NavLink to={`/CharacterDetails/${id}`}>
                <Character key={id} name={name} imageUrl={image}/>
              </NavLink>
          })}
        </Route>
      </Switch>

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


