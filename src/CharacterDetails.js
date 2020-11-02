import React from 'react'
import styled from 'styled-components/macro'

export default function CharacterDetails ({characterDetails, hidden=true}){
    return <Wrapper hidden={hidden}>
                <h2>{characterDetails.name}</h2>
                <CharImage src={characterDetails.image} />
                <span>Species: {characterDetails.species}</span>
                <span>Gender: {characterDetails.gender}</span>
            </Wrapper>
}

const Wrapper = styled.div`
    background-color: #678492;
    display: ${(props) => (props.hidden ? 'none' : 'grid')};
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px 35px 10px 15px;
    border-bottom: 1px solid #233644;
    place-items: center;
    margin: 20px 60px 20px 60px;
    font-size: 16px;
    opacity: 0.95;
    border-radius: 5px;
    color: #09182b;
    text-align: center;
    text-transform: uppercase;
    box-shadow:  20px 20px 60px #576f7c, 
                 -20px -20px 60px #7596a8;

    h2{
        font-size: 20px;
    }
`
const CharImage = styled.img`
    width: 90px;
    height: 90px;
    border: 1px solid #233644;
    border-radius: 5px;
`