import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "src/assets/styles/GlobalStyles";
import { theme } from "src/assets/styles/theme";

export const MainProvider = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </>
);
