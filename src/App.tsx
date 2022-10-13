import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <h1>Hello world!!</h1>
    </ThemeProvider>
  );
}
