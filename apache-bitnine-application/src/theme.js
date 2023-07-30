import { createTheme } from "@mui/material";

export const palette = {
  primary: {
    main: "#022EA9",
  },
  gray: {
    100: "#ababab",
  },
  text: {
    gray: {
      100: "#ababab",
    },
  },
};

export const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: `'Noto Sans KR', sans-serif`,
    fontSize: 14,
  },
});
