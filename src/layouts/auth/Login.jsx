import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
// import { useFormik, Field, ErrorMessage, Formik } from "formik";
// import * as Yup from "yup";

const ContainerFluid = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const FormBox = styled.div`
  width: 25rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too Short!")
//     .max(70, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });

const Login = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   onSubmit: (values) => {
  //     SignupSchema;
  //   },
  // });

  // const { handleSubmit, handleChange, values, errors, touched } = formik;

  // console.log("err", errors);

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/admin");
  };

  // console.log(errors.email);
  return (
    <>
      <ContainerFluid>
        <FormBox>
          <Heading>
            <h1>Login</h1>
          </Heading>
          <form onSubmit={handleHome}>
              <Input
                type="email"
                placeholder="Please Enter Your Email"
                name="email"
                // onChange={handleChange}
                // value={values.email}
              />
              {/* <span>
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </span> */}
              {/* <ErrorMessage name="email" /> */}
              <Input
                type="password"
                placeholder="Please Enter Your password"
                name="password"
                // onChange={handleChange}
                // value={values.password}
              />
              {/* <span>
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </span>
              <ErrorMessage name="password" /> */}
              <Heading>
                <Button nameBtn="Submit" type="submit" />
              </Heading>
            </form>
          {/* <Formik>
            
          </Formik> */}
        </FormBox>
      </ContainerFluid>
    </>
  );
};

export default Login;
