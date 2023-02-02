import React from 'react'
import { useLocation } from 'react-router-dom'
import * as S from './style'

export const Container = ({children}) => {
    const location = useLocation()

  return (
    <S.Container location={location.pathname}>
        {children}
    </S.Container>
    )
}
