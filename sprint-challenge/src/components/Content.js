import React from 'react';
import './bits.css';
import ShowButton from './ShowButton.js';

class Content extends React.Component {
    render(){
    return(
        <div>
            {this.props.contentProps.map(person => 
            <div>
            <p>{person.firstName}</p><p>{person.lastName}</p>
            <p>Fan of {person.likes[0]}, {person.likes[1]}, and {person.likes[2]}!</p>
            <ShowButton nameProps={person.firstName} favColorProps={person.favColorHex}/>
            </div>
            )}
        </div>
        )
    }
}

export default Content;