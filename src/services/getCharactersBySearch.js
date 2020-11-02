export default function getCharactersBySearch(searchedCharacter) {
    return fetch('https://rickandmortyapi.com/api/character/?name='+searchedCharacter)
      .then(res => res.json())
    
  }