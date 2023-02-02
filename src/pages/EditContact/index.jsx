import { ContactForm } from "../../components/ContactForm"
import { PageHeader } from "../../components/PageHeader"

export const EditContact = () => {
    return (
        <>
            <PageHeader title="Editar Contato"/>
            <ContactForm buttonLabel="Salvar alterações"/>
        </>

    )
}
