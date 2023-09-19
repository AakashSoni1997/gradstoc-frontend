export default function validate(values) {
  let errors = {};
  if (!values.user_name) {
    errors.user_name = "User Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}
