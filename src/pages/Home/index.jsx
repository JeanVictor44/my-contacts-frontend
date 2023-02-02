import * as S from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import { useEffect, useState } from "react";
import { formatTel } from "../../utils/formatTel";
import { Modal } from "../../components/Modal";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Loader } from "../../components/Loader";
import { MycontactsApi } from "../../api";

export const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [contactRemove, setContactRemove] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputSearch, setInputSearch] = useState("");

    useEffect(() => {
        (async() => {
            const request = await MycontactsApi.get('/contacts')
            setContacts(request.data)
        })()

    }, []);

    const openModal = (contact) => {
        setModalIsOpen(true);
        setContactRemove(contact);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const deleteContact = async () => {
        await MycontactsApi.delete(`/contacts/${contactRemove.id}`);
        setContacts((contacts) =>
            contacts.filter((contact) => contact.id != contactRemove.id)
        );
        closeModal();
    };



    const lowerSearch = inputSearch.toLowerCase()


    const contactsFiltered = useMemo(() => {
        return contacts?.filter(contact => contact?.name.toLowerCase().includes(lowerSearch))

    },[inputSearch, contacts])

    return (
        <S.Container>
            <Modal
                isOpen={modalIsOpen}
                closeModal={closeModal}
                deleteContact={deleteContact}
                contact={contactRemove}
                danger
            />

            <S.InputSearchContainer>
                <input
                    type="text"
                    placeholder="Pesquisar contato..."
                    onChange={(event) => setInputSearch(event.target.value)}
                />
            </S.InputSearchContainer>

            <S.Header>
                <strong>{contacts.length} contatos</strong>
                <Link to="/new">Novo contato</Link>
            </S.Header>
            <S.ListContainer>
                <header>
                    <button type="button" className="sort-button">
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow" />
                    </button>
                </header>

                {contactsFiltered.map((contact) => (
                    <S.Card
                        initial={{ opacity: 0, x: -400 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04  }}
                        key={contact.id}
                    >
                        <div className="info">
                            <div className="contact-name">
                                <strong>{contact.name}</strong>
                                <small>{contact.category_name}</small>
                            </div>
                            <span>{contact.email}</span>
                            <span>{formatTel(contact.phone)}</span>
                        </div>

                        <div className="actions">
                            <Link to={`/edit/${contact.id}`}>
                                <img src={edit} alt="Edit" />
                            </Link>
                            <button
                                type="button"
                                onClick={() => openModal(contact)}
                            >
                                <img src={trash} alt="Delete" />
                            </button>
                        </div>
                    </S.Card>
                ))}
            </S.ListContainer>
        </S.Container>
    );
};
