import * as S from "./style";
import ReactDOM from 'react-dom'

export const Loader = () => {
    return ReactDOM.createPortal(
        <S.Overlay>
            <div className="loader" />
        </S.Overlay>,
        document.getElementById("loader-root")
    );
};
