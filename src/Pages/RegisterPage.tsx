import React, { useState } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';

import { CustomTextField } from '../StyledComponents';

import Grid from '@material-ui/core/Grid';

import UserIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import LockIcon from '@material-ui/icons/Lock';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import VMasker from 'vanilla-masker';
import MaskedInput from 'react-input-mask';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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

interface InputValues {
    name: string;
    email: string;
    birth_date: string;
    phone: string;
    password: string;
}

const RegisterPage: React.FC = () => {
    const { register, handleSubmit, control } = useForm<InputValues>();

    const [nameMessage, setNameMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [birthDateMessage, setBirthDateMessage] = useState('');
    const [phoneMessage, setPhoneMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');

    const onSubmit = (data: any) => {
        console.log(data);
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid style={{ marginLeft: 30, marginTop: 20 }} container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <UserIcon style={{ color: '#11c76f' }} />
                                </Grid>
                                <Grid item>
                                    <Controller
                                         name="name"
                                         control={control}
                                         defaultValue=""
                                         render={({ field }) => 
                                        <CustomTextField
                                            label="Nome"
                                            {...field} 
                                        />}
                                    />
                                </Grid>
                            </Grid>
                            <Grid style={{ marginLeft: 30, marginTop: 20 }} container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <EmailIcon style={{ color: '#11c76f' }} />
                                </Grid>
                                <Grid item>
                                    <Controller
                                         name="email"
                                         control={control}
                                         defaultValue=""
                                         render={({ field }) => 
                                        <CustomTextField
                                            label="E-mail"
                                            {...field} 
                                        />}
                                    />
                                </Grid>
                            </Grid>
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
                                        {...register("phone")}
                                    >
                                        {(inputProps: object) => (
                                            <CustomTextField
                                                label="Telefone"
                                                {...inputProps} 
                                            />
                                        )}
                                    </MaskedInput>
                                </Grid>
                            </Grid>
                            <Grid style={{ marginLeft: 30, marginTop: 20 }} container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <LockIcon style={{ color: '#11c76f' }} />
                                </Grid>
                                <Grid item>
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <CustomTextField
                                                type="password"
                                                label="Senha"
                                                {...field} 
                                            />
                                        )} 
                                    />
                                </Grid>
                            </Grid>
                            <RegisterFormButtonSection>
                                <DefaultButton type="submit" borderRadius="6px" backgroundDefault="#11c76f" backgroundHover="#10ad61">
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