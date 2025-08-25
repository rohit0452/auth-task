import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import loginSchema from "../validations/loginSchema";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = { username: "", password: "" };

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUser &&
      storedUser.username === values.username &&
      storedUser.password === values.password
    ) {
      toast.success("Login Successful!");
      navigate("/welcome", { replace: true });
      resetForm();
    } else {
      toast.error("Invalid username or password!");
    }
    setSubmitting(false);

    resetForm();
    setSubmitting(false);
  };

  return (
    <div>
      <div className="py-5 bg-green">
        <h2 className="text-center text-white">Login</h2>
        <p className="text-center text-white">Sign in to continue </p>
      </div>
      <div className="row p-2">
        <div className="col-12 col-md-6 col-lg-4 mx-auto  my-5 ">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                <div className="mb-3">
                  <label className="ps-2 form-label">USERNAME</label>
                  <Field
                    name="username"
                    type="text"
                    className="form-control input-line"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger small"
                  />
                </div>

                <div className="mb-3 ">
                  <label className="form-label ps-2">PASSWORD</label>
                  <div className="position-relative">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="form-control input-line"
                    />
                    <span
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <i className="fas fa-eye-slash"></i>
                      ) : (
                        <i className="fas fa-eye"></i>
                      )}
                    </span>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger small"
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success w-50 mt-3">
                    LOGIN
                  </button>
                </div>

                <p className="text-center mt-3">
                  Don't have an Account? <Link to="/signup">SignUp</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
