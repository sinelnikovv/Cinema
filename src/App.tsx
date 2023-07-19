import * as React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#CCFF00",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Box
            sx={{
              bgcolor: "#000",
              color: "text.primary",
            }}
          >
            <Box sx={{ pl: 2 }}>
              <Header />

              <Box sx={{ width: "100%" }}>
                <AppRouter />
              </Box>
            </Box>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}
