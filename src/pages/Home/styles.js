import styled from "styled-components";
import { motion } from 'framer-motion'

export const Container = styled.div`
`

export const Header = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:32px;
    strong {
        color:#222;
        font-size:24px;
    }
    a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        align-items: center;
        height:46px;
        color:${({ theme }) => theme.colors.primary.main};
        border:2px solid;
        padding:14px 12px;
        font-weight: 700;
        border-radius:4px;
        transition: .2s ease;
        cursor:pointer;
        &:hover {
            color: #fff;
            background-color: ${({ theme }) => theme.colors.primary.main};
        }
    }
`

export const ListContainer = styled.div`
    margin-top:24px;
    header {
        margin-bottom: 8px;
        button {
            background:transparent;
            border:none;
            display:flex;
            align-items: center;

            span {
                color:${({ theme }) => theme.colors.primary.main};
                margin-right:8px;
                font-weight: bold;
            }
        }

    }
`
export const InputSearchContainer = styled.div`
    width: 100%;
    input {
        width: 100%;
        height:50px;
        border-radius: 25px;
        border:none;
        font-size: 16px;
        padding-left:16px;
        box-shadow: 0px 4px 10px rgba(0,0,0,0.4);

        &::placeholder {
            color: #BCBCBC;
        }

    }
`

export const Card = styled(motion.div)`
    background: #fff;
    box-shadow: 0px 4px 10px 0px #0000000A;
    padding:16px;
    border-radius:4px;
    display:flex;
    justify-content: space-between;
    & + & {
        margin-top: 16px;
    }
    .contact-name {
        strong {
            margin-right:8px;

        }
        small {
            background-color:${({theme}) => theme.colors.primary.lighter};
            padding:4px;
            color:${({theme}) => theme.colors.primary.dark};
            font-weight: bold;
            text-transform: uppercase;
        }
    }
    .info {
        display:flex;
        flex-direction: column;
        gap:4px;
        span {
            color:${({theme}) => theme.colors.gray[200]};
        }
    }

    .actions {
        display: flex;
        align-items: center;
        gap:10px;
        button {
            border:none;
            background:transparent;
        }
    }

`
