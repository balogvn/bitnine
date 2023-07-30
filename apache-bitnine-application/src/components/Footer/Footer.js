import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ExplicitIcon from "@mui/icons-material/Explicit";
import { Stack, styled, Typography } from "@mui/material";

const Footer = () => {
  return (
    <StyledContainer justifyContent="space-between">
      <Typography fontSize={14} color={"text.gray.100"}>
        © 2023 by Bitnine Global Inc. All rights reserved
      </Typography>
      <Stack spacing={4} direction={"row"} alignItems={"center"}>
        <IconContainer direction={"row"}>
          <GitHubIcon />
          <YouTubeIcon />
          <LinkedInIcon />
          <FacebookRoundedIcon />
          <ExplicitIcon />
        </IconContainer>
        <Typography
          color={"text.gray.100"}
          fontSize={14}
          textTransform={"uppercase"}
        >
          Contact
        </Typography>
      </Stack>
    </StyledContainer>
  );
};

const StyledContainer = styled(Stack)({
  left: 0,
  right: 0,
  bottom: 0,
  flexDirection: "row",
  padding: "32px 40px",
  justifyContent: "space-between",
  position: "fixed",
  backgroundColor: "white",
});

const IconContainer = styled(Stack)(({ theme }) => ({
  "& svg": {
    height: 15,
    cursor: "pointer",
    color: theme.palette.text.gray[100],
  },
}));

export default Footer;
