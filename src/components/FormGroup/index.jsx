import * as S from "./stye";
import PropTypes from "prop-types";

// Para aplicar a lógica de erro
export const FormGroup = ({ children, error }) => {
    return (
    <S.Container>
        {children}
        {error && <small>{error}</small>}
    </S.Container>
    )
};

FormGroup.propType = {
    children: PropTypes.node.isRequired,
    error: PropTypes.node.isRequired,
};

FormGroup.defaultProps = {
    error: null,
};
