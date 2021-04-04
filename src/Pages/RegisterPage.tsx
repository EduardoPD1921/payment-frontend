import React, { useState } from 'react';
import axios from 'axios';

import VMasker from 'vanilla-masker';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import RegisterInput from '../Components/RegisterInput';

import Image from '../Static/Images/bitcoin-trading.svg';

import {
    RegisterPageSection,
    RegisterFormSection,
    RegisterFormIllustration,
    RegisterFormInputs,
    RegisterIllustration,
    RegisterFormTitle,
    DefaultButton,
    RegisterFormButtonSection
} from '../StyledComponents';

const RegisterPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [nameMessage, setNameMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [birthDateMessage, setBirthDateMessage] = useState('');
    const [phoneMessage, setPhoneMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');

    const onChangeTextHandler = (value: string, type: string) => {
        switch (type) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'birthDate':
                return setBirthDate(birthDateMasker(value));
            case 'phone':
                return setPhone(phoneMasker(value));
            case 'password':
                return setPassword(value);
            default:
                console.log(type);
        }
    }

    const phoneMasker = (value: string) => {
        const phoneMasked = VMasker.toPattern(value, '(99) 99999-9999');

        return phoneMasked;
    }

    const birthDateMasker = (value: string) => {
        const birthMasked = VMasker.toPattern(value, "99/99/9999");

        return birthMasked;
    }

    const submitRegisterForm = () => {
        const phoneUnmasked = VMasker.toPattern(phone, "99999999999");
        const data = {
            name,
            email,
            birth_date: birthDate,
            phone_number: phoneUnmasked,
            password
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/register',
            data: data
        })
            .then(resp => console.log(resp))
            .catch(error => console.log(error.response));
    }

    return (
        <div className="app">
            <Navbar />
            <RegisterPageSection>
                <RegisterFormSection>
                    <RegisterFormIllustration>
                        <RegisterIllustration src={Image} />
                    </RegisterFormIllustration>
                    <RegisterFormInputs>
                        <RegisterFormTitle>Cadastro</RegisterFormTitle>
                        <form>
                            <RegisterInput 
                                label="Nome" 
                                value={name} 
                                type="name" 
                                onChangeTextHandler={onChangeTextHandler} 
                                error={!!nameMessage} 
                                errorMessage={nameMessage} 
                            />
                            <RegisterInput
                                label="E-mail"
                                value={email}
                                type="email"
                                onChangeTextHandler={onChangeTextHandler}
                                error={!!emailMessage}
                                errorMessage={emailMessage} 
                            />
                            <RegisterInput
                                label="Data de nascimento"
                                value={birthDate}
                                type="birthDate"
                                onChangeTextHandler={onChangeTextHandler}
                                error={!!birthDateMessage}
                                errorMessage={birthDateMessage} 
                            />
                            <RegisterInput
                                label="Telefone"
                                value={phone}
                                type="phone"
                                onChangeTextHandler={onChangeTextHandler}
                                error={!!phoneMessage}
                                errorMessage={phoneMessage} 
                            />
                            <RegisterInput
                                label="Senha"
                                value={password}
                                type="password"
                                onChangeTextHandler={onChangeTextHandler}
                                error={!!passwordMessage}
                                errorMessage={passwordMessage}
                            />
                            <RegisterFormButtonSection>
                                <DefaultButton onClick={() => submitRegisterForm()} borderRadius="6px" backgroundDefault="#11c76f" backgroundHover="#10ad61">
                                    Cadastrar
                                </DefaultButton> 
                            </RegisterFormButtonSection> 
                        </form>
                    </RegisterFormInputs>
                </RegisterFormSection>
            </RegisterPageSection>
            <Footer />
        </div>
    )
}

export default RegisterPage;