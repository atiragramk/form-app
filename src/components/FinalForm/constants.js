export const initialState = {
    fields: {
      name: {
        label: "Name",
        id: "name",
        type: "text",
        placeholder: "Enter name",
      },
      email: {
        label: "Email",
        id: "email",
        type: "email",
        placeholder: "Enter email",
      },
      password: {
        view: false,
        label: "Password",
        id: "password",
        type: "password",
        placeholder: "Create password",
      },
      confirm: {
        view: false,
        label: "Confirm Password",
        id: "confirm",
        type: "password",
        placeholder: "Confirm password",
      },
    },
  };