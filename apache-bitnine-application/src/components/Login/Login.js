import React from "react";
import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import useLogin from "./hooks/useLogin";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import Logo from "../../assets/b_logo.png";
import { Formik } from "formik";

const Login = () => {
  const { error, handleSubmit: onSubmit, handleSignUpClick } = useLogin();

  return (
    <LoginContainer>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <StyledStack gap={2}>
              <Image src={Logo} />
              <TextField
                name="username"
                fullWidth
                label="Username"
                variant="outlined"
                onChange={handleChange}
                value={values.username}
              />
              <TextField
                name="password"
                type="password"
                fullWidth
                label="Password"
                variant="outlined"
                onChange={handleChange}
                value={values.password}
              />
              {error && <Typography color={"error"}>{error}</Typography>}
              <Button type="submit" color="primary" variant="contained">
                <Typography fontWeight={"bold"}>Login</Typography>
              </Button>
              <Button
                color={"primary"}
                variant="text"
                onClick={handleSignUpClick}
              >
                <Typography fontWeight={"regular"}>Sign up</Typography>
              </Button>
            </StyledStack>
          </form>
        )}
      </Formik>
    </LoginContainer>
  );
};

const StyledStack = styled(Stack)({
  width: "500px",
  alignItems: "center",
});

export const Image = styled("img")({
  width: "50%",
});

export default Login;
