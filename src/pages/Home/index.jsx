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

export const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [contactRemove, setContactRemove] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputSearch, setInputSearch] = useState("");

    const openModal = (contact) => {
        setModalIsOpen(true);
        setContactRemove(contact);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const deleteContact = () => {
        setContacts((contacts) =>
            contacts.filter((contact) => contact.id != contactRemove.id)
        );
        closeModal();
    };

    useEffect(() => {
        setContacts([
            {
                id: 1,
                nome: "Jean Victor",
                tel: 71987557670,
                social_media: "Instagram",
                email: "jeanvictormachado3@gmail.com",
            },
            {
                id: 2,
                nome: "Emanuelle",
                tel: 71985644672,
                social_media: "Linkedin",
                email: "emanuellesantos@gmail.com",
            },
            {
                id: 3,
                nome: "Ramon",
                tel: 71988576258,
                social_media: "Whatsapp",
                email: "ramonsilva@gmail.com",
            },
        ]);
    }, []);

    const lowerSearch = inputSearch.toLowerCase()


    const contactsFiltered = useMemo(() => {
        return contacts
        .filter(contact => contact.nome.toLowerCase().includes(lowerSearch))

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
                        transition={{ delay: 0.04 * contact.id }}
                    >
                        <div className="info">
                            <div className="contact-name">
                                <strong>{contact.nome}</strong>
                                <small>{contact.social_media}</small>
                            </div>
                            <span>{contact.email}</span>
                            <span>{formatTel(contact.tel.toString())}</span>
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
