import * as Yup from 'yup';

const signupSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z ]+$/, "Only letters and spaces are allowed")
    .required("Name is required"),

  username: Yup.string()
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+=-]+$/, "Username can contain letters, numbers, and special characters")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^\+\d{1,3}[0-9]{10}$/, "Phone must include country code and 10 digits")
    .required("Phone is required"),

  password: Yup.string()
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+=-]+$/, "Password can contain letters, numbers, and special characters")
    .notOneOf([Yup.ref('username')], "Password cannot be same as username")
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

 const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

export default {signupSchema , initialValues};
