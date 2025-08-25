import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import signupSchema from "../validations/signupSchema";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (
    values,
    { resetForm, setSubmitting, validateForm }
  ) => {
    const errors = await validateForm();

    if (Object.keys(errors).length > 0) {
      toast.error("Please fix the errors before submitting!");
      setSubmitting(false);
      return;
    }
    localStorage.setItem("userData", JSON.stringify(values));
    toast.success("Signup successful!");
    resetForm();
    setSubmitting(false);
  };

  return (
    <div>
      <div className="py-4 bg-green">
        <h4 className="text-center text-white">Create new Account</h4>
      </div>

      <div className="row p-2">
        <div className="col-12 col-md-10 mx-auto my-5">
          <Formik
            initialValues={signupSchema.initialValues}
            validationSchema={signupSchema.signupSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                <div className="row">
                  <div className="col-12 col-md-6 mb-5">
                    <Field
                      placeholder="NAME"
                      name="name"
                      type="text"
                      className="form-control input-line"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  <div className="col-12 col-md-6 mb-5">
                    <Field
                      placeholder="USERNAME"
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

                  <div className="col-12 col-md-6 mb-5">
                    <Field
                      placeholder="EMAIL"
                      name="email"
                      type="email"
                      className="form-control input-line"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  <div className="col-12 col-md-6 mb-5">
                    <Field
                      placeholder="PHONE NO."
                      name="phone"
                      type="text"
                      className="form-control input-line"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  <div className="col-12 col-md-6 mb-5 ">
                    <div className="position-relative">
                      <Field
                        placeholder="PASSWORD"
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

                  <div className="col-12 col-md-6 mb-5 ">
                    <div className="position-relative">
                      <Field
                        placeholder="CONFIRM PASSWORD"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-control input-line"
                      />
                      <span
                        className="toggle-password"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <i className="fas fa-eye-slash"></i>
                        ) : (
                          <i className="fas fa-eye"></i>
                        )}
                      </span>
                    </div>

                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-success w-sm-50  mt-4"
                    >
                      SIGN UP
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
