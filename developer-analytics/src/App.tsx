import { ThemeProvider } from "@mui/material";
import "./App.css";
import { AppRoutes } from "./Routes/Routes";
import theme from "./assets/Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
