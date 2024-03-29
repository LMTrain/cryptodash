import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import {fontSize1, blueBoxShadow, color4} from '../Shared/Styles';

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color4}
    ${fontSize1}
    padding: 5px;
    cursor: pointer;
    &: hover {
        ${blueBoxShadow}
    }
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`;

export default function (){
    return <AppContext.Consumer>
        {({confirmFavorites}) =>
            <CenterDiv>
                <ConfirmButtonStyled onClick={confirmFavorites}>
                    Save LM Favorites
                </ConfirmButtonStyled>
            </CenterDiv>
        }
    </AppContext.Consumer>;
    
}
