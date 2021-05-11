import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { CustomTextField } from '../StyledComponents';

import Grid from '@material-ui/core/Grid';
import Loading from '@material-ui/core/CircularProgress';

import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import LockIcon from '@material-ui/icons/Lock';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import VMasker from 'vanilla-masker';
import MaskedInput from 'react-input-mask';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import RegisterInput from '../Components/RegisterInput';

import Image from '../Static/Images/bitcoin-trading.svg';

import errorHandler from '../ErrorHandler';

import {
    FormSection,
    DefaultFormSection,
    RegisterFormIllustration,
    RegisterFormInputs,
    RegisterIllustration,
    RegisterFormTitle,
    DefaultButton,
    FormButtonSection,
    LightTextRegister,
    LinkItem
} from '../StyledComponents';

interface InputValues {
    name: string;
    email: string;
    birth_date: string;
    phone_number: string;
    password: string;
}

const RegisterPage: React.FC = () => {
    const history = useHistory();
    const { register, handleSubmit, control } = useForm<InputValues>();

    const [isLoading, setIsLoading] = useState(false);
    const [nameMessage, setNameMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [birthDateMessage, setBirthDateMessage] = useState('');
    const [phoneNumberMessage, setPhoneNumberMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');

    const onSubmit = (data: any) => {
        setIsLoading(true)

        const unmaskedPhoneNumber = VMasker.toPattern(data.phone_number, "99999999999");

        data = {
            ...data,
            phone_number: unmaskedPhoneNumber
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/register',
            data: data
        })
            .then(resp => submitSuccessHandler(resp.data))
            .catch(error => submitErrorHandler(error.response.data));
    }

    const renderSubmitButton = () => {
        if (isLoading) {
            return <Loading style={{ color: '#11c76f' }} />
        }

        return (
            <DefaultButton type="submit" borderRadius="6px" backgroundDefault="#11c76f" backgroundHover="#10ad61">
                Cadastrar
            </DefaultButton> 
        )
    }

    const submitSuccessHandler = (resp: string) => {
        setIsLoading(false);

        if (resp === 'user-created') {
            localStorage.setItem('snackbarOpen', 'true');

            const path = '/';
            history.push(path);
        }
    }

    interface ErrorTypes {
        name: [string];
        email: [string];
        birth_date: [string];
        phone_number: [string];
        password: [string];
        newEmail: [string];
        oldEmail: [string];
        newPassword: [string];
        oldPassword: [string];
        message: string;
    }

    const submitErrorHandler = (error: ErrorTypes) => {
        setIsLoading(false);
        setNameMessage('');
        setEmailMessage('');
        setBirthDateMessage('');
        setPhoneNumberMessage('');
        setPasswordMessage('');

        if (error.name) {
            return setNameMessage(errorHandler(error));
        }

        if (error.email) {
            return setEmailMessage(errorHandler(error));
        }

        if (error.birth_date) {
            return setBirthDateMessage(errorHandler(error));
        }

        if (error.phone_number) {
            return setPhoneNumberMessage(errorHandler(error));
        }

        if (error.password) {
            return setPasswordMessage(errorHandler(error));
        }
    }

    return (
        <div className="app">
            <Navbar />
            <FormSection height={880}>
                <DefaultFormSection flexDirection="row" width="40%" height={600}>
                    <RegisterFormIllustration>
                        <RegisterIllustration src={Image} />
                    </RegisterFormIllustration>
                    <RegisterFormInputs>
                        <RegisterFormTitle>Cadastro</RegisterFormTitle>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <RegisterInput
                                name="name"
                                label="Nome"
                                helperText={nameMessage}
                                error={!!nameMessage}
                                control={control}
                                icon={<PersonIcon style={{ color: '#11c76f' }} />} 
                            />

                            <RegisterInput
                                name="email"
                                label="E-mail"
                                helperText={emailMessage}
                                error={!!emailMessage}
                                control={control}
                                icon={<EmailIcon style={{ color: '#11c76f' }} />} 
                            />

                            <Grid style={{ marginLeft: 30, marginTop: 20 }} container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <EventIcon style={{ color: '#11c76f' }} />
                                </Grid>
                                <Grid item>
                                    <MaskedInput
                                        mask="99/99/9999"
                                        {...register("birth_date")}
                                    >
                                        {(inputProps: object) => (
                                            <CustomTextField
                                                helperText={birthDateMessage}
                                                error={!!birthDateMessage} 
                                                label="Data de nascimento" 
                                                {...inputProps} 
                                            />
                                        )}
                                    </MaskedInput>
                                </Grid>
                            </Grid>

                            <Grid style={{ marginLeft: 30, marginTop: 20 }} container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <PhoneAndroidIcon style={{ color: '#11c76f' }} />
                                </Grid>
                                <Grid item>
                                    <MaskedInput
                                        mask="(99) 99999-9999"
                                        {...register("phone_number")}
                                    >
                                        {(inputProps: object) => (
                                            <CustomTextField
                                                helperText={phoneNumberMessage}
                                                error={!!phoneNumberMessage}
                                                label="Telefone"
                                                {...inputProps} 
                                            />
                                        )}
                                    </MaskedInput>
                                </Grid>
                            </Grid>

                            <RegisterInput
                                name="password"
                                label="Senha"
                                helperText={passwordMessage}
                                error={!!passwordMessage}
                                isPassword
                                control={control}
                                icon={<LockIcon style={{ color: '#11c76f' }} />} 
                            />

                            <FormButtonSection width="80%">
                                {renderSubmitButton()}
                                <LightTextRegister fontSize={12}>ou</LightTextRegister>
                                <span style={{ marginTop: 5 }}>
                                    <LightTextRegister marginTop={10} fontSize={14}>Já possui uma conta?</LightTextRegister>
                                    <LinkItem href="/login">Entrar</LinkItem>
                                </span>
                            </FormButtonSection> 
                        </form>
                    </RegisterFormInputs>
                </DefaultFormSection>
            </FormSection>
            <Footer />
        </div>
    )
}

export default RegisterPage;