import React from 'react';
import styled from 'styled-components';
import FavColor from './FavColor';
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

class ShowButton extends React.Component {
    constructor(){
        super();
        this.state= {
            isShown: false,
            isHidden: false,
        }
    }
    toggleShown = () => {
        if (!this.state.isShown){
          this.setState({
            isShown: true,
            isHidden: true,
            })
        } else {
          this.setState({
            isShown: false,
            isHidden: true,
        })
        }
    }
    toggleHidden = () => {
        if (!this.state.isHidden){
          this.setState({
            isHidden: true,
            isShown: false,
        })
        } else {
          this.setState({
            isHidden: false,
            isShown: false,
        })
        }
    }
    render(){
    return(
        <div>
            <Button className={this.state.isShown ? "deactivated" : "activated"} onClick={this.toggleShown}>Click to show {this.props.nameProps}'s favorite color!</Button>
            <Button className={this.state.isHidden ? "activated" : "deactivated"} onClick={this.toggleHidden}>Click to hide {this.props.nameProps}'s favorite color!</Button>
            <FavColor favClassName={this.state.isShown} colorProps={this.props.favColorProps} />
        </div>
    )
    }
}

export default ShowButton;