import React, {Component} from "react";
import './button.scss'


export class Button extends Component {

    render() {
        const {type:{type, value}, disabled, onClick} = this.props
        return(
            <input
            className={disabled ? 'btn btn__disabled' : 'btn'} 
            type={type}
            value={value}
            disabled={disabled}
            onClick={onClick}></input>
        )
    }
}


