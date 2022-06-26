

export const validate = (values) => {
  const errors = {};
  const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regPassword =
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2) {
    errors.name = "Name is too short";
  }

  if (!values.email) {
    delete errors.email;
  } else if (!regEmail.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (!regPassword.test(values.password)) {
    errors.password = "Password is too simple";
  }

  if (!values.confirm) {
    errors.confirm = "Required";
  } else if (values.confirm !== values.password) {
    errors.confirm = "Does not match";
  }

  return Object.keys(errors).length ? errors : undefined;
};

export const initialState = {
  fields: {
    name: {
      label: "Name",
      id: "name",
      type: "text",
      value: "",
      placeholder: "Enter name",
    },
    email: {
      label: "Email",
      id: "email",
      type: "email",
      value: "",
      placeholder: "Enter email",
    },
    password: {
      label: "Password",
      id: "password",
      type: "password",
      value: "",
      placeholder: "Create password",
    },
    confirm: {
      label: "Confirm Password",
      id: "confirm",
      type: "password",
      value: "",
      placeholder: "Confirm password",
    },
  },
};
