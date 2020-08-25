import { isNil, isEmpty, test } from 'ramda';

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const isEmail = test(emailRegex);

export const required = (value) => (!isNil(value) && !isEmpty(value) ? undefined : 'Required');

export const validEmail = (value) => (isEmail(value) ? undefined : 'Invalid Email');

export const validPasswordMatch = (password1) => (password2) =>
  password1 === password2 ? undefined : 'Passwords do not match';

export const composeValidators = (...args) => (value) => {
  for (const validator of args) {
    const error = validator(value);

    if (error) {
      return error;
    }
  }

  return undefined;
};
