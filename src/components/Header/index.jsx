import * as S from "./styles";
import logo from "../../assets/images/logo.svg";
import { useLocation } from "react-router-dom";

// Centralizar o path em um context para os componentes consumirem esse contexto

export const Header = () => {
    const location = useLocation()
    return (
        <S.Container location={location.pathname}>
            <img src={logo} alt="MyContacts" />
        </S.Container>
    );
};
