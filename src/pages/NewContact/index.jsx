import { Button } from "../../components/Button"
import { ContactForm } from "../../components/ContactForm"
import { Input } from "../../components/Input"
import { PageHeader } from "../../components/PageHeader"
import { Select } from "../../components/Select"

export const NewContact = () => {
    return (
        <>
            <PageHeader title="Novo contato"/>
            <ContactForm buttonLabel="Cadastrar"/>

        </>


    )
}
