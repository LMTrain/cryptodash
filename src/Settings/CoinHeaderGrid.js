import React from 'react';
import styled from "styled-components";

export const CoinHeaderGridStyled = styled.div`
display: grid;
grid-template-columns: 5fr 1fr;
`;

export const CoinSymbol = styled.div`
    justify-self; auto;
`;

export default function({name, symbol}){
    return <CoinHeaderGridStyled>
        <div>{name} </div>
        <CoinSymbol> {symbol}</CoinSymbol>
    </CoinHeaderGridStyled>
}