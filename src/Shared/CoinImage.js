import React from 'react';
import styled, {css} from 'styled-components';

const CoinImage = styled.img`
    height: 40px;
    ${props => props.spotlight && css`
        height: 200px;
        margin: auto;
        display: block;
    `}
`


export default function ({coin,  spotlight}) {
    return <CoinImage
        spotlight={spotlight}
        // alt="coinSymbol"
        alt={coin.CoinSymbol}        
        src={`http://cryptocompare.com/${
            coin.ImageUrl
            }`}
    />;
}
