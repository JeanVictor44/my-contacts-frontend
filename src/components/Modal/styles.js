import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(px);
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};;
    justify-content: center;
    align-items: center;

`;

export const Box = styled.div `
    display: flex;
    flex-direction: column;
    position:relative;
    width:100%;
    max-width: 455px;
    background-color: #FFF;
    height:204px;
    padding:24px;
    strong {
        color:${({theme, danger})=> danger ? theme.colors.danger.main :  theme.colors.dark[900]};
        font-weight: bold;
        font-size:22px;
        display:block;
        margin-bottom:8px;
    }
    span {
        font-size:18px;
        font-weight: 400;

    }
`

export const ActionButtons = styled.div `
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap:8px;

    .delete-button {
        background-color: ${({ theme }) => theme.colors.danger};
        border:none;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        padding:10px 18px;
        border-radius: 4px;
        height: 40px;
    }

`
export const CancelButton = styled.button `
    font-size: 16px;
    border:none;
    background-color: transparent;
    color:${({ theme }) => theme.colors.gray[200]};
    font-weight: 400;
    height:40px;


`

