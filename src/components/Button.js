import styled, {css} from "styled-components";

export const Button = styled.button`
    padding: 0 16px;
    height:52px;
    border:none;
    border-radius: 4px;
    font-size:16px;
    background: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0px 4px 10px 0px #0000000A;
    color: #fff;
    font-weight: bold;
    transition:background 0.2s ease-in;

    &:hover {
        background:${({ theme }) => theme.colors.primary.light};
    }
    &:active {
        background: ${({ theme }) => theme.colors.primary.dark};
    }

    &:disabled   {
        background: #ccc;
        cursor: not-allowed;
    }
    ${({theme, danger}) => danger && css`
            background: ${theme.colors.danger.main};
            &:hover {
                background:${theme.colors.danger.light};
            }
            &:active {
                background: ${theme.colors.danger.dark};
            }
        `
    }
`;
