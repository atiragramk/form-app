const required = (value) => (value ? undefined : "Required");

const minValue = (min) => (value) =>
  value.length > min ? undefined : "Name is too short";

const email = (value) => {
  const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!value) {
    return undefined;
  }
  return regEmail.test(value) ? undefined : "Email is invalid";
};

const password = (value) => {
  const regPassword =
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
  return regPassword.test(value) ? undefined : "Password is too simple";
};

const confirmPassword = (value, values) => {
  return value === values.password ? undefined : "Passwords do not match";
};

const composeValidators =
  (...validators) =>
  (value, values) =>
    validators.reduce(
      (error, validator) => error || validator(value, values),
      undefined
    );

export const validators = {
  name: composeValidators(required, minValue(2)),
  email: composeValidators(email),
  password: composeValidators(required, password),
  confirm: composeValidators(required, confirmPassword),
};
