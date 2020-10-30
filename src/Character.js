import React from 'react'
import styled from 'styled-components/macro'

export default function Character ({name, imageUrl}){
    console.log('Character.js called.')
    return <Wrapper>
        <CharImage src={imageUrl} />
        <span>{name}</span>
    </Wrapper>
}

const Wrapper = styled.div`
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 6fr;
    padding: 10px;
    border-bottom: 1px solid #e3e3e3;
    place-items: center;

`
const CharImage = styled.img`
    width: 40px;
    height: 40px;
    border: 1px solid #42628C;
`
