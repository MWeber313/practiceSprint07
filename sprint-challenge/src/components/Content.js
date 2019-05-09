import React from 'react';
import styled from 'styled-components';
import FavColor from './FavColor.js'
import './bits.css';

const Button = styled.button`
    background: green;
    color: white;
    padding: 10px;
    width: 150px;
    height: 100px;
    :hover{
        border: green;
        color: green;
        background: white;
    }
`

function Content (props) {
    return(
        <div>
            {props.contentProps.map(person => 
            <div>
            <p>{person.firstName}</p><p>{person.lastName}</p>
            <p>Fan of {person.likes[0]}, {person.likes[1]}, and {person.likes[2]}!</p>
            <Button className={props.classNameProps ? "deactivated" : "activated"} onClick={props.buttonProps}>Click to show {person.firstName}'s favorite color!</Button>
            <Button className={props.classNameProps ? "activated" : "deactivated"} onClick={props.buttonProps}>Click to hide {person.firstName}'s favorite color!</Button>
            <FavColor 
            favClassName={props.classNameProps}
            colorProps={person.favColorHex} />
            </div>
            )}
        </div>
    )
}

export default Content;