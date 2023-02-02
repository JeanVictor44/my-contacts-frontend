import { GLobalStyles } from "../../assets/styles/global";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../assets/styles/themes/default";
import { Header } from "../Header";
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "../../Routes";
import { Container } from "./Container";

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GLobalStyles />
                <Container>
                    <Header />
                    <RoutesApp />
                </Container>
            </ThemeProvider>
        </BrowserRouter>

    );
}

export default App;
