import styled from 'styled-components/macro'
import { useHistory } from "react-router-dom";

export default function SearchBar({onSearch}){
  const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault()
        const searchedCharacter = event.target.searchedCharacter.value;
        onSearch(searchedCharacter)
        event.target.reset()
        history.push("/");

        //event.target.focus()
      }

    return <FormStyled onSubmit={handleSubmit}>
            <label>
            <i class="fa fa-instagram icon"></i> 

            <InputStyled name="searchedCharacter" type="search" placeholder="Name of character..."/>
            </label>
            <Button>Search</Button>
        </FormStyled>
}


/*


import { useHistory } from "react-router-dom";

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

*/


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
  font-family: monospace;
  z-index: 999;
`

const Button = styled.button`
    letter-spacing: 3px;
    background-color: #395161;
    padding: 10px 20px;
    border-top: 0px;
    border: 1px solid #395161;
    font-size: 16px;
    opacity: 0.95;
    height: 60px;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-family: monospace;
`

/*

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

*/