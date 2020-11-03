import React from 'react'
import styled from 'styled-components/macro'

export default function Character ({name, imageUrl, onClick, hidden=false}){
    return <Wrapper hidden={hidden} onClick={onClick}>
        <CharImage src={imageUrl} />
        <span>{name}</span>
    </Wrapper>
}

const Wrapper = styled.div`
    background-color: #678492;
    display:  ${(props) => (props.hidden ? 'none' : 'grid')};
    grid-template-columns: 1fr ;
    gap: 20px;
    padding: 25px 35px 20px 15px;
    border-bottom: 1px solid #233644;
    place-items: center;
    margin: 20px 40px 20px 40px;
    font-size: 18px;
    opacity: 0.95;
    border-radius: 5px;
    color: #09182b;
    text-align: center;
    box-shadow:  20px 20px 60px #576f7c, 
                 -20px -20px 60px #7596a8;


`
const CharImage = styled.img`
    width: 90px;
    height: 90px;
    border: 1px solid #233644;
    border-radius: 5px;
`
