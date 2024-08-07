import { SnackbarProvider } from "notistack";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import CustomStyleProvider from "./provider/CustomStyleProvider";
import LoadingProvider from "./provider/LoadingProvider";
import WindowProvider from "./provider/WindowProvider";
import { AppRoutes } from "./route";
import "./styles/font/font.css";
import ThemeCustomization from "./themes";

declare global {
  interface Window {
    naver: any;
  }
}

function App() {
  return (
    <RecoilRoot>
      <ThemeCustomization>
        {/* <StylesProvider injectFirst> */}
        <CustomStyleProvider />
        <SnackbarProvider>
          <CookiesProvider>
            <BrowserRouter basename={`/`}>
              <AppRoutes />
              <WindowProvider />
              <LoadingProvider />
            </BrowserRouter>
          </CookiesProvider>
        </SnackbarProvider>
        {/* </StylesProvider> */}
      </ThemeCustomization>
    </RecoilRoot>
  );
}

export default App;
