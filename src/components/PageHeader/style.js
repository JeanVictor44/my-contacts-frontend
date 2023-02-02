import styled from 'styled-components';

export const Container  = styled.header`
    margin-bottom:24px;
    a {
        color:${({ theme }) => theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom:8px;

        img {
            rotate: -90deg;
        }
    }

`;
