import styled from 'styled-components/macro'

export default function SearchBar({onSearch}){

    function handleSubmit(event) {
        event.preventDefault()
        const searchedCharacter = event.target.searchedCharacter.value;
        onSearch(searchedCharacter)
        event.target.reset()
        //event.target.focus()
      }

    return <FormStyled onSubmit={handleSubmit}>
            <label>
            Search Character:
            <input name="searchedCharacter" type="text" placeholder="..."/>
            </label>
            <Button>Search</Button>
        </FormStyled>
}

const FormStyled = styled.form`
  display: grid;
  gap: 4px;
  width: 100%;
  margin-bottom: 20px;
  justify-items: stretch;
  input {
    font-size: 1em;
    width: 100%;
    padding: 4px 0;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  background: plum;
  color: darkorchid;
  font-size: 1.2em;
  border: none;
  border-radius: 6px;
`