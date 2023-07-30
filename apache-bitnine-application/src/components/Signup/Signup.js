import React from "react";
import LoginContainer from "../Login/components/LoginContainer/LoginContainer";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <Stack gap={3}>
        <Typography>Sign up not available</Typography>
        <Button variant="text" onClick={() => navigate("/login")}>
          Back to Login
        </Button>
      </Stack>
    </LoginContainer>
  );
};

export default Signup;
