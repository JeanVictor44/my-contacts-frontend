import styled from "styled-components";

export const Select = styled.select`
    width: 100%;
    background-color: white;
    box-shadow: 0px 4px 10px 0px #0000000A;
    border:none;
    height:52px;
    border-radius:4px;
    outline: none;
    padding: 0 16px;
    font-size:16px;
    border:2px solid #fff;
    transition:border-color 0.2s ease-in;
    &:focus {
        border-color    :${({ theme }) => theme.colors.primary.main};
    }
    
`;
