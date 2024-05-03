import { StylesProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import WindowProvider from "./provider/WindowProvider";
import LoadingProvider from "./provider/LoadingProvider";
import { AppRoutes } from "./route";
import GlobalStyles from "./styles/globalStyle";
import "./styles/font/font.css";
import { CookiesProvider } from "react-cookie";
import Config from "env/Config";

declare global {
  interface Window {
    naver: any;
  }
}

function App() {
  return (
    <RecoilRoot>
      <StylesProvider injectFirst>
        <GlobalStyles />
        <SnackbarProvider>
          <CookiesProvider>
            <BrowserRouter basename={`/`}>
              <AppRoutes />
              <WindowProvider />
              <LoadingProvider />
            </BrowserRouter>
          </CookiesProvider>
        </SnackbarProvider>
      </StylesProvider>
    </RecoilRoot>
  );
}

export default App;
