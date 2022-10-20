import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProvider } from "./hooks";
import { Router } from "./router";
import { darkTheme } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppProvider>
        <Router />
      </AppProvider>
    </ThemeProvider>
  );
}
