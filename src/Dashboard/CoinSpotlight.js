import React from'react';
import styled from 'styled-components';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import CoinImage from '../Shared/CoinImage';

const SpotlightName = styled.h2`
    text-align: center;    
`
export default function (){
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) =>
            <Tile>
                {/* <SpotlightName> {coinList[currentFavorite].CoinName} </SpotlightName> */}
                <SpotlightName> {coinList[currentFavorite] ? coinList[currentFavorite].CoinName : `No coin found for ${currentFavorite}` } </SpotlightName>
                {/* <SpotlightName> {currentFavorite} </SpotlightName> */}
                <CoinImage spotlight coin={coinList[currentFavorite] ? coinList[currentFavorite] : `No coin found for ${currentFavorite}`} />
            </Tile>
        }
        </AppContext.Consumer>
    )
}

