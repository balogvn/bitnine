import React from "react";
import { Stack, styled } from "@mui/material";
import Footer from "../../../Footer";

const LoginContainer = ({ children }) => {
  return (
    <StyledContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </StyledContainer>
  );
};

const StyledContainer = styled(Stack)({
  height: "100vh",
});

const ChildrenContainer = styled(Stack)({
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
});

export default LoginContainer;
