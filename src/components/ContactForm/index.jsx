import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { Select } from "../Select";
import * as S from "./style";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";
import { isEmailValid } from "../../utils/isEmailValid";
import { isPhoneValid } from "../../utils/isPhoneValid";

// Controlled components   -> React é responsável por gerenciar os campos do form -> formulários pequenos e simples
// Uncontrolled components -> A resonsabilidade é da dom

export const ContactForm = ({ buttonLabel }) => {
    //Quando usamos estados para controlar os valores do form -> Controlled components
    // A única fonte de verdade é o useState -> One-way data binding
    //Two way data binding -> Vue e Angular -> DOM sincronizado com o estado
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        console.log({
            name,
            email,
            phone,
            category,
        });
    }

    function handleNameChange(event) {
        const nameTyped = event.target.value
        setName(nameTyped );

        // Não usar o estado em si, pois a atualização do estado é assíncrona
        if (!nameTyped ) {
            setErrors((prevErrors) => [
                ...prevErrors,
                { field: "name", message: "Nome é obrigatório." },
            ]);
        } else {
            setErrors((prevErrors) =>
                prevErrors.filter((error) => {
                    error.field !== "name";
                })
            );
        }
    }

    function handleEmailChange(event) {
        const emailTyped = event.target.value;
        setEmail(emailTyped);

        if (emailTyped && !isEmailValid(emailTyped)) {

            const haveSomeError = errors.some(
                (error) => error.field === "e-mail"
            );

            if (haveSomeError) {
                return;
            }

            setErrors((prevErrors) => [
                ...prevErrors,
                { field: "e-mail", message: "e-mail inválido." },
            ]);

        } else {
            setErrors((prevErrors) =>
            prevErrors.filter((error) => error.field !== "e-mail")
            );
        }
    }

    function handleTelChange(event) {
        const phoneTyped = event.target.value
        setPhone(phoneTyped)
        if(phoneTyped && !isPhoneValid(phoneTyped)){
            const haveSomeError = errors.some((error) => error.field === 'phone')

            if(haveSomeError) {
                return;
            }

            setErrors((prevErrors) => [
                ...prevErrors,
                {field: 'phone', message: 'Telefone inválido.'}
            ])
        }else {
            setErrors((prevErrors) => prevErrors.filter((error) => error.field !== 'phone'))
        }

    }

    function getErrorMessageByFieldName(fieldName) {
        return errors.find((error) => error.field === fieldName)?.message
    }

    console.log(errors);
    return (
        <S.Form onSubmit={handleSubmit}>
            {/*
                O Backend deve SEMPRE CONTER A REGRA DE NÉGOCIO
                PARA GARANTIR A INTEGRIDADE DOS DADOS COLETADOS

                Duplicar regra de negócio no Backend
                e FrontEnd. Quando a regra do bakend mudar a do front deve mudar tbm

                Entretanto essa regra não irá mudar com tanta frequência

                Vantagens de validação no FrontEnd
                - Diminuição de requisições inválidas, consequência de uma
                  validação que não permitirá que requisições desalinhadas
                  com a regra de negócio sejam feitas, diminuindo uma possível
                  sobrecarga no servidor

                - Melhora a experiência do usuário em casos de uso de dados móveis, pois
                  a experiência é prejudicada quando a request inválida é feita para
                  o servidor

                  serveless -> só pga pelo

            */}

            <FormGroup error={getErrorMessageByFieldName('name')}>
                <Input
                    placeholder="Nome"
                    value={name}
                    error={getErrorMessageByFieldName('name')}
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('e-mail')}>
                <Input
                    placeholder="E-mail"
                    value={email}
                    error={getErrorMessageByFieldName('e-mail')}
                    onChange={handleEmailChange}
                />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName('phone')}>
                <Input
                    placeholder="Telefone"
                    value={phone}
                    error={getErrorMessageByFieldName('phone')}
                    onChange={handleTelChange}
                />
            </FormGroup>

            <FormGroup>
                <Select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="" selected hidden="hidden">
                        Categoria
                    </option>
                    <option>Linkedin</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                </Select>
            </FormGroup>

            <S.ButtonContainer>
                <Button type="submit">{buttonLabel}</Button>
            </S.ButtonContainer>
        </S.Form>
    );
};

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};
