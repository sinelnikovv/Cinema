import * as React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Container maxWidth="xl">
          <Header />

          <Box sx={{ height: "3000px", width: "100%", pt: "80px" }}>
            <AppRouter />
          </Box>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
