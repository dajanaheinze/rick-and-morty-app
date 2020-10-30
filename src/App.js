import {useState} from "react"
import SearchBar from "./SearchBar"
import getCharacter from './services/getCharacter'
import Character from './Character'


function App() {
  const [characters, setCharacters] = useState([])
  
  function showCharacter(searchedCharacter) {
    getCharacter(searchedCharacter)
      .then(data => setCharacters(data.results))
  }
  
  console.log(characters)
  return (
    <div className="App">
      {characters.map(({id, name, image}) => {
        //<div>{name}</div>
        //console.log(id)
        return <Character key={id} name={name} imageUrl={image} />
      }
      
    )}
      <SearchBar onSearch={showCharacter} />
            
    </div>
  );
}


export default App;
