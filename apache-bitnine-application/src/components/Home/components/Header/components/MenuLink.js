import React from "react";
import { styled, Typography } from "@mui/material";

const MenuLink = ({ value, active }) => {
  const StyledTypography = styled(Typography)({
    fontSize: 16,
    color: active ? "#fac433" : "#202020",
    padding: "0 12.5px",
    textTransform: "uppercase",
    cursor: "pointer",
    "&:hover": {
      color: "#fac433",
    },
  });

  return <StyledTypography>{value}</StyledTypography>;
};

export default MenuLink;
