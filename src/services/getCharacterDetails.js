export default function getCharacterDetails(characterId) {
    return fetch('https://rickandmortyapi.com/api/character/'+characterId)
      .then(res => res.json())
    
  }