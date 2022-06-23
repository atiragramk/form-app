import React, {Component} from "react";
import { Input, Button } from "./";
import { initialState } from "./utils";


import './form.scss'

export class Form extends Component {

    constructor() {
        super();
        this.state = initialState;
        this.ref = {
            passRef: React.createRef(),
            confirmRef: React.createRef(),
        }

    }

    handleChange = (event) => {
        const property = event.target.name;
        const targetValue = event.target.value;
        const {
            fields,
            fields:{password, confirm},
            fields:{[property]: {validator}}
        } = this.state
        const error = validator(targetValue, password.value);
        if (property === 'password'){
            const error = validator(targetValue)
            const confirmError = confirm.validator(confirm.value, targetValue);

            this.setState({
                fields: {
                    ...fields,
                    password: {...password, value: targetValue, error: error, disabled: Boolean(error)},
                    confirm: {...confirm,error: confirmError, disabled: Boolean(confirmError)}
                }
            })
        } else {
            this.setState({
                fields: {
                    ...fields,
                    [property]: {...fields[property], value: targetValue, error: error, disabled: Boolean(error)
                    },
                }
            })
        }
    }

    handleDisable = () => {
        const { fields:{name, password, confirm} } = this.state
        if (name.disabled || password.disabled || confirm.disabled) {
            return true
        } else {
            return false
        }
    }


    handleToggleView = (event, id) => {
        event.preventDefault();
        const {fields} = this.state
        const target = event.target;
        if (target.classList.contains('password-view')) {
            target.classList.remove('password-view');
            this.setState({
                fields:{
                    ...fields,
                    [id]: {...fields[id], type: 'password'}
                }
            })
        } else {
            target.classList.add('password-view');
            this.setState({
                fields:{
                    ...fields,
                    [id]: {...fields[id], type: 'text'}
                }
            })
        }
    }

    handleReset = () => {
        this.setState({
            fields: initialState.fields
        });
        const {passRef, confirmRef} = this.ref
        passRef.current.classList.remove('password-view');
        confirmRef.current.classList.remove('password-view');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {
            fields,
            fields: {password, confirm}
        } = this.state
        if (password.value === confirm.value) {
            alert('Form is submitted');
            this.handleReset();
        } else {
            const updatedState = {};
            Object.entries(fields).map(([label, state]) => {
                const error = state.validator(state.value, state.password);
                updatedState[label] = {...state, error}
            })
            this.setState({
                fields: updatedState,
            })
        }
    }

    render() {
        const {fields, reset, submit} = this.state;
        const disabled = this.handleDisable();
        
        return (
            <form className="form" onSubmit={this.handleSubmit} onReset={this.handleReset}>
                <h2>Form</h2>
                {Object.entries(fields).map(([label, state]) => {
                    const {type, value, error, id, title, message} = state;
                    return (
                        <Input
                        key={label}
                        type={type}
                        value={value}
                        error={error}
                        id={id}
                        title={title}
                        message={message}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                        onToggleView={this.handleToggleView}
                        inputRefs={this.ref}
                        />
                    );
                })}
                <div className="wrapper__btn">
                    <Button type={reset}/>
                    <Button type={submit} disabled={disabled}/>
                </div>
            </form>
        )
    }
}