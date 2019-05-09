import React from 'react';
import styled, {css} from 'styled-components';
import './bits.css'

const NonFunction = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 25%;
    ${props => props.selectItem && css`
        color: black;
        background-color: ${props.colorProps};
    `}
`

function FavColor (props) {
    console.log(props.colorProps)
    return(
    <div>
        <div>
            <NonFunction selectItem colorProps={props.colorProps} className={props.favClassName ? "activated" : "deactivated"}>{props.colorProps}</NonFunction>
        </div>
    </div>
    )
}

export default FavColor;