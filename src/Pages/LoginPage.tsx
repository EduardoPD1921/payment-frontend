import React, { useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import Grid from '@material-ui/core/Grid';
import Loading from '@material-ui/core/CircularProgress';

import errorHandler from '../ErrorHandler';

import {
    FormSection,
    DefaultFormSection,
    DefaultButton,
    CustomTextField,
    FormButtonSection
} from '../StyledComponents';

interface InputValues {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const history = useHistory();

    const { handleSubmit, control } = useForm<InputValues>();

    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    interface FormDataType {
        email: string;
        password: string;
    }

    const onSubmit = (data: FormDataType) => {
        setIsLoading(true);

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/login',
            data,
        })
            .then(resp => submitSuccessHandler(resp.data.token))
            .catch(error => submitErrorHandler(error.response.data));
    }

    const submitSuccessHandler = (token: string) => {
        setIsLoading(false);
        Cookie.set('authToken', token, { secure: true });

        const path = '/';
        history.push(path);
    }

    interface ErrorTypes {
        name: [string];
        email: [string];
        birth_date: [string];
        phone_number: [string];
        password: [string];
        message: string;
    }

    const submitErrorHandler = (error: ErrorTypes) => {
        setIsLoading(false);
        setEmailMessage('');
        setPasswordMessage('');

        if (error.email) {
            return setEmailMessage(errorHandler(error));
        }

        if (error.password) {
            return setPasswordMessage(errorHandler(error));
        }

        if (error.message) {
            if (error.message === 'wrong-email') {
                return setEmailMessage(errorHandler(error));
            }

            if (error.message === 'wrong-password') {
                return setPasswordMessage(errorHandler(error));
            }
        }
    }

    const renderSubmitButton = () => {
        if (isLoading) {
            return <Loading style={{ color: '#11c76f' }} />
        }

        return (
            <DefaultButton type="submit" borderRadius="6px" backgroundDefault="#11c76f" backgroundHover="#10ad61">
                Entrar
            </DefaultButton>
        )
    }

    return (
        <div className="app">
            <Navbar />
            <FormSection height={800}>
                <DefaultFormSection alignItems="center" justifyContent="center" flexDirection="column" width="20%" height={500}>
                    <AccountCircleIcon style={{ color: '#11c76f', fontSize: 100 }} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid style={{ marginTop: 20 }} container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmailIcon style={{ color: '#11c76f' }} />
                            </Grid>
                            <Grid item>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <CustomTextField
                                            helperText={emailMessage}
                                            error={!!emailMessage}
                                            width="90%"
                                            label="E-mail"
                                            {...field} 
                                        />
                                    )} 
                                />
                            </Grid>
                        </Grid>
                        <Grid style={{ marginTop: 20 }} container spacing={1} alignItems="flex-end">
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
                                            helperText={passwordMessage}
                                            error={!!passwordMessage}
                                            type="password"
                                            width="90%"
                                            label="Senha"
                                            {...field} 
                                        />
                                    )} 
                                />
                            </Grid>
                        </Grid>
                        <FormButtonSection width="100%">
                            {renderSubmitButton()}
                        </FormButtonSection> 
                    </form>
                </DefaultFormSection>
            </FormSection>
            <Footer />
        </div>
    )
}

export default LoginPage;