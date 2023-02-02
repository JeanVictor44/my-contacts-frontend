import { Link } from 'react-router-dom'
import * as S from './style'
import arrow from '../../assets/images/icons/arrow.svg'
import PropTypes from 'prop-types'

export const PageHeader = ({title}) => {
  return (
    <S.Container>
        <Link to='/'>
            <img src={arrow} alt="Back"/>
            <span>Voltar</span>
        </Link>
        <h1>{title}</h1>
    </S.Container>
  )
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
}
