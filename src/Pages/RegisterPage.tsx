import React, { useState } from 'react';

import VMasker from 'vanilla-masker';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import RegisterInput from '../Components/RegisterInput';

import Image from '../Static/Images/bitcoin-trading.svg';

import Grid from '@material-ui/core/Grid';

import UserIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import LockIcon from '@material-ui/icons/Lock';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import {
    RegisterPageSection,
    RegisterFormSection,
    RegisterFormIllustration,
    RegisterFormInputs,
    RegisterIllustration,
    CustomTextField,
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
                        <RegisterInput 
                            label="Nome" 
                            value={name} 
                            type="name" 
                            onChangeTextHandler={onChangeTextHandler} error={!!nameMessage} errorMessage={nameMessage} 
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
                            <DefaultButton borderRadius="6px" backgroundDefault="#11c76f" backgroundHover="#10ad61">
                                Cadastrar
                            </DefaultButton> 
                        </RegisterFormButtonSection> 
                    </RegisterFormInputs>
                </RegisterFormSection>
            </RegisterPageSection>
            <Footer />
        </div>
    )
}

export default RegisterPage;