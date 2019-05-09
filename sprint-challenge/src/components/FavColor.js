import React from 'react';
import styled from 'styled-components';
import './bits.css'

const NonFunction = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 25%;
    color: white;
    background: blue;
    :hover{
        background: white;
        color: blue;
    }
`

function FavColor (props) {
    return(
    <div>
        <div>
            <NonFunction className={props.favClassName ? "activated" : "deactivated"}>{props.colorProps}</NonFunction>
        </div>
    </div>
    )
}

export default FavColor;