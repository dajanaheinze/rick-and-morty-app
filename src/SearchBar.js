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
            <InputStyled name="searchedCharacter" type="text" placeholder="search Character"/>
            </label>
            <Button>Search</Button>
        </FormStyled>
}

const FormStyled = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
 

`

const InputStyled = styled.input`
  height: 60px;
  width: 100%;
  padding: 4px 0;
  text-align: center;
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #09182b;
  color: white;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  width: 100%;
`