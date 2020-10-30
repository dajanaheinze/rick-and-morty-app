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
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px 35px 10px 15px;
    border-bottom: 1px solid #e3e3e3;
    place-items: center;

`
const CharImage = styled.img`
    width: 80px;
    height: 80px;
    border: 1px solid #42628C;
`
