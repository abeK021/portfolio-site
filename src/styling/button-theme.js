import { createTheme } from "@mui/material/styles";

export const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(6, 165, 165, 0 )",
      contrastText: "rgba(6, 165, 165 )",
    },
  },

  shadows: Array(25).fill("none"),
});
