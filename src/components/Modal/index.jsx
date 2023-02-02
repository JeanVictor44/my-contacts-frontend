import * as S from './styles'
import {Button} from '../Button'
import ReactDOM from 'react-dom'
import { MycontactsApi } from '../../api'

export const Modal = ({contact, isOpen, closeModal, deleteContact, danger = false}) => {

  return ReactDOM.createPortal(
    <S.Overlay isOpen={isOpen} >
        <S.Box danger={danger}>
            <strong>Tem certeza que deseja remover o contato "{contact.name}"?</strong>
            <span>Esta ação não poderá ser desfeita!</span>
            <S.ActionButtons>
                <S.CancelButton onClick={closeModal}>Cancelar</S.CancelButton>
                <Button type="submit" onClick={deleteContact} className="delete-button" danger={danger} >Deletar</Button>
            </S.ActionButtons>

        </S.Box>
    </S.Overlay>,
    document.getElementById('modal-root'))
}
