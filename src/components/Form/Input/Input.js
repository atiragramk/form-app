import React, {Component} from "react";

import './input.scss'

export class Input extends Component {
    render() {
        const {
            type, 
            value, 
            error, 
            id,
            title,
            inputRefs,
            onChange, 
            onToggleView } = this.props;
        const {passRef, confirmRef} = inputRefs;
        return (
            <div className="wrapper">
                <label 
                className="label" 
                htmlFor={id}>
                    {id === 'confirm' ? `Confirm ${title}`: `${title}`}</label>
                <input
                className={error ? `input input-errors` : 'input'}
                value={value} 
                placeholder={id === 'confirm' ? `Confirm ${title}`: `Enter ${title}`} 
                name={id} 
                type={type} 
                id={id}
                onBlur={onChange}
                onChange={onChange}/>
                {title === 'Password' && 
                <a href="#"
                className="password"
                ref={id === 'confirm' ? confirmRef : passRef}
                onClick={(event) => onToggleView(event, id)}></a>}
                {error &&
                <div className="error">{error}</div>}
            </div>
        )
    }
}