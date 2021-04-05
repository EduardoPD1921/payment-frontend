import React, { useState } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { CustomTextField } from '../StyledComponents';

import Grid from '@material-ui/core/Grid';
import Loading from '@material-ui/core/CircularProgress';

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
    phone_number: string;
    password: string;
}

const RegisterPage: React.FC = () => {
    const history = useHistory();
    const { register, handleSubmit, control } = useForm<InputValues>();

    const [isLoading, setIsLoading] = useState(false);

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
            .then(resp => {
                setIsLoading(false);
                if (resp.data === 'user-created') {
                    localStorage.setItem('snackbarOpen', 'true');
                    const path = '/';
                    history.push(path);
                }
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error.response);
            });
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

    // const history = useHistory();

    // const test = () => {
    //     const path = '/';
    //     history.push(path);
    // }

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
                                        {...register("phone_number")}
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
                                {renderSubmitButton()}
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