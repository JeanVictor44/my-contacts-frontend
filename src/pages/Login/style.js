import styled from "styled-components";

export const Container = styled.div `
    display:flex;
    height:100vh;
    width:100%;

`
export const Presentation = styled.div `
    flex:1 1 380px;
    background-color:${({ theme }) => theme.colors.primary.main};
    img:first-of-type{
        display:block;
        margin:74px auto 150px auto;
        width: 300px;
    }
    img:last-of-type {
        width: 650px;
        position:absolute;
        bottom: 0;
        left:0;
    }
    h1 {
        color: #fff;
        font-size:58px;
        width: 280px;
        margin: 0 auto;
        letter-spacing: 1.5px;
    }
    h3 {
        margin-top:98px;
        font-size:24px;
        color: #fff;
        text-align: center;
    }
`

export const Principal = styled.div `
    flex:1;
    padding:50px;
a {
    text-decoration: none;
    display: block;
    text-align:center;
    margin-bottom:34px;
    color: #000;
}
h1 {
    font-size:58px;
    text-align: center;
}
p {
    text-align: center;
    margin-bottom:60px;
}
    hr {
        display:inline-block;
        width: 40%;
    }
    input + input {
        margin-top: 30px;
    }
    button {
        margin-top:50px;
        margin-bottom: 35px;
    }
`

