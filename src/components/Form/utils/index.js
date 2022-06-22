

export const initialState = {
    fields: {
        name: {
            title: "Name",
            id: 'name',
            type: "text",
            value: '',
            error: null,
            disabled: true,
            validator: (value) => {
                return value.length > 2
                ? false
                : !value.length
                ? 'Input correct name'
                : 'Name is too short'
            }
        },
        email: {
            title: "Email",
            id: 'email',
            type: 'email',
            value: '',
            error: false,
            disabled: false,
            validator: (value) => {
                const re =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                return re.test(value)
                ? false 
                : "Email is invalid"
            },
        },
        password: {
            title: "Password",
            id: 'password',
            type: "password",
            value: '',
            error: null,
            disabled: true,
            validator: (value) => {
                return value.match(
                    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
                  )
                    ? false
                    : !value.length
                    ? 'Password required'
                    : "Password is too simple";
            },
        },
        confirm: {
            title: "Password",
            id: 'confirm',
            type: "password",
            value: '',
            error: null,
            disabled: true,
            validator: (password, value) => {
                return password === value
                ? false 
                : 'Passwords do not match'
            }
        }, 
    },
    submit: {
        type: 'submit',
        value: 'Submit',
    },
    reset: {
        type: 'reset',
        value: 'Reset',
    }, 
    isErrors: null,
}