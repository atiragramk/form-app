export const initialState = {
  fields: {
    name: {
      label: "Name",
      title: "Name",
      id: "name",
      type: "text",
      value: "",
      placeholder: "Enter name",
      error: null,
      disabled: true,
      validator: (value) => {
        return value.length > 2
          ? false
          : !value.length
          ? "Input correct name"
          : "Name is too short";
      },
    },
    email: {
      label: "Email",
      title: "Email",
      id: "email",
      type: "email",
      value: "",
      placeholder: "Enter email",
      error: false,
      disabled: false,
      validator: (value) => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return re.test(value) ? false : "Email is invalid";
      },
    },
    password: {
      label: "Password",
      title: "Password",
      id: "password",
      type: "password",
      value: "",
      placeholder: "Create password",
      error: null,
      disabled: true,
      validator: (value) => {
        return value.match(
          /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
        )
          ? false
          : !value.length
          ? "Password required"
          : "Password is too simple";
      },
    },
    confirm: {
      label: "Confirm Password",
      title: "Password",
      id: "confirm",
      type: "password",
      value: "",
      placeholder: "Confirm password",
      error: null,
      disabled: true,
      validator: (password, value) => {
        return password === value ? false : "Passwords do not match";
      },
    },
  },
  submit: {
    type: "submit",
    value: "Submit",
  },
  reset: {
    type: "reset",
    value: "Reset",
  },
};
