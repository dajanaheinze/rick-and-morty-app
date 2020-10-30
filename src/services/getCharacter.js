export default function getCharacter(searchedCharacter) {
    return fetch('https://rickandmortyapi.com/api/character/?name='+searchedCharacter)
      .then(res => res.json())
    
  }