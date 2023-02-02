import styled from "styled-components";

export const Container = styled.header`
    margin-top: 74px;
    margin-bottom:48px;
    display: ${({location})=> location === '/login' ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    flex-direction: column;


`
