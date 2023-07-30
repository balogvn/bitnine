import React from "react";
import { Box, Button, Stack, styled } from "@mui/material";
import Logo from "../../../../assets/b_logo.png";
import MenuLink from "./components/MenuLink";

const Header = () => {
  return (
    <StyledContainer>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Image src={Logo} />
        <Stack direction={"row"} alignItems={"center"}>
          <MenuLink active value="Products" />
          <MenuLink value="Use cases" />
          <MenuLink value="Services" />
          <MenuLink value="Resources" />
          <MenuLink value="Blog" />
          <MenuLink value="Company" />
          <MenuLink value="IR" />
          <Box ml={2}>
            <Button variant={"contained"}>Try free</Button>
          </Box>
        </Stack>
      </Stack>
    </StyledContainer>
  );
};

const StyledContainer = styled(Stack)({
  padding: "12px 30px",
  top: 0,
  left: 0,
  right: 0,
  position: "fixed",
  backgroundColor: "white",
});

const Image = styled("img")({
  width: "250px",
});

export default Header;
