import React, {Component} from "react";
import { Input, Button } from "./";


import './form.scss'

export class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: {
                title: "Name",
                id: 'name',
                type: "text",
                value: '',
                error: null,
                required: true,
                disabled: true,
                message: 'Input correct name',
                validator: (value) => value.length
            },
            email: {
                title: "Email",
                id: 'email',
                type: 'email',
                value: '',
                error: false,
                required: false,
                disabled: false,
                message: 'Input correct email',
                validator: (value) => {
                    const re =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                    return re.test(value);
                },
            },
            password: {
                title: "Password",
                id: 'password',
                type: "password",
                value: '',
                error: null,
                required: true,
                disabled: true,
                message: 'Create your password',
                validator: (value) => value.length,
            },
            confirm: {
                title: "Password",
                id: 'confirm',
                type: "password",
                value: '',
                error: null,
                required: true,
                disabled: true,
                message: 'Passwords do not match',
                validator: (password) => {
                    if(password) {
                        const {password:{value}} = this.state;
                        return password === value;
                    }
                    return password.length;

                }
            },
            submit: {
                type: 'submit',
                value: 'Submit',
            },
            reset: {
                type: 'button',
                value: 'Reset',
            },  
        }
    }

    handleChangeValue = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        const {[property]: {validator}} = this.state;
        const error = validator(value);
        if (error) {
            this.setState((state) => ({
                [property]: {...state[property], disabled: false},
            }))
        } else {
            this.setState((state) => ({
                [property]: {...state[property], disabled: true},
            }))
        }
        this.setState((state) => ({
            [property]: {...state[property], value, error: !error},
        }))
    }

    onDisabled = () => {
        const {name, password, confirm} = this.state
        if (name.disabled || password.disabled || confirm.disabled) {
            return true
        } else {
            return false
        }
    }


    onViewPassword = (event, id) => {
        event.preventDefault();
        const target = event.target;
        const input = document.getElementById(id);
        if (input.getAttribute('type') === 'password') {
            target.classList.add('password_view');
            this.setState((state) => ({
                [id]: {...state[id], type: 'text'}
            }))
        } else {
            target.classList.remove('password_view');
            this.setState((state) => ({
                [id]: {...state[id], type: 'password'}
            }))
        }
    }

    onReset = () => {
        const {name, email, password, confirm} = this.state;
        this.setState(() => ({
            name:{...name, value: '', error: null, disabled: true},
            email:{...email, value: '', error: null, disabled: true},
            password:{...password, value: '', error: null, disabled: true, type: 'password'},
            confirm:{...confirm, value: '', error: null, disabled: true, type: 'password'},
        }));
        const view = document.querySelectorAll('#view');
        view.forEach(item => item.classList.remove('password_view'));
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {password, confirm} = this.state
        if (password.value === confirm.value) {
            alert('Form is submitted');
            this.onReset();
        } else {
            this.setState(() => ({
                password: {...password, error: !password.error},
                confirm: {...confirm, error: !confirm.error}
            }))
        }
    }

    render() {
        const {name, email, password, confirm, submit, reset} = this.state;
        const disabled = this.onDisabled();
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <h2>Form</h2>
                <Input name={name} onChange={this.handleChangeValue}/>
                <Input name={email} onChange={this.handleChangeValue}/>
                <Input name={password} onChange={this.handleChangeValue} onView={this.onViewPassword}/>
                <Input name={confirm} onChange={this.handleChangeValue} onView={this.onViewPassword}/>
                <div className="wrapper__btn">
                    <Button type={reset} onClick={this.onReset}/>
                    <Button type={submit} disabled={disabled}/>
                </div>
            </form>
        )
    }
}