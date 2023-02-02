import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    max-width:${({location}) => location === '/login' ? '100%' : '500px'}; ;
    margin:0 auto;
`
