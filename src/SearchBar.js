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
            <i class="fa fa-instagram icon"></i> 

            <InputStyled name="searchedCharacter" type="text" placeholder="Name of character..."/>
            </label>
            <Button>Search</Button>
        </FormStyled>
}

const FormStyled = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  font-size: 16px;

`

const InputStyled = styled.input`
  height: 60px;
  width: 100%;
  padding: 4px 0;
  text-align: center;
  border: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 16px;
  font-family: Calibri;
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #39434e;
  color: white;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  height: 60px;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: Calibri;
`