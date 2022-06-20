import React, {Component} from "react";

import './input.scss'

export class Input extends Component {
    render() {
        const 
            {name:{type, value, error, id, required, title, message}, 
            onChange, 
            onView} = this.props;
        return (
            <div className="wrapper">
                <label 
                className="label" 
                htmlFor={id}>
                    {id === 'confirm' ? `Confirm ${title}`: `${title}`}</label>
                <input
                required={required}
                className={error ? `input input_error` : 'input'}
                value={value} 
                placeholder={id === 'confirm' ? `Confirm ${title}`: `Enter ${title}`} 
                name={id} 
                type={type} 
                id={id}
                onBlur={required ? onChange : null}
                onChange={onChange}/>
                {title === 'Password' && 
                <a href="#"
                id="view" 
                className="password"
                onClick={(event) => onView(event, id)}></a>}
                {error &&
                <div className="error">{message}</div>}
            </div>
        )
    }
}