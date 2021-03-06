import React, { useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { withStyles } from '@material-ui/core/styles';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import LoginInput from '../Components/LoginInput';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import Loading from '@material-ui/core/CircularProgress';

import errorHandler from '../ErrorHandler';

import {
    FormSection,
    DefaultFormSection,
    DefaultButton,
    FormButtonSection,
    RememberAccountSection,
    LightTextRegister
} from '../StyledComponents';

interface InputValues {
    email: string;
    password: string;
    rememberAccount: boolean;
}

const GreenCheckbox = withStyles({
    root: {
        color: '#11c76f',
        '&$checked': {
            color: '#11c76f'
        }
    },
    checked: {}
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

const LoginPage: React.FC = () => {
    const { handleSubmit, control } = useForm<InputValues>();

    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    interface FormDataType {
        email: string;
        password: string;
        rememberAccount: boolean;
    }

    const onSubmit = (data: FormDataType) => {
        setIsLoading(true);

        const formData = {
            email: data.email,
            password: data.password
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/login',
            data: formData
        })
            .then(resp => submitSuccessHandler(resp.data.token, data.rememberAccount))
            .catch(error => submitErrorHandler(error.response.data));
    }

    const submitSuccessHandler = (token: string, rememberAccount: boolean) => {
        setIsLoading(false);

        if (rememberAccount) {
            Cookie.set('authToken', token, { secure: true, expires: 3650 });
        } else {
            sessionStorage.setItem('authToken', token);
        }

        // Cookie.set('user_historic', [], { secure: true, expires: 3650 });

        window.location.href = "/";
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
                        <LoginInput
                            name="email"
                            label="E-mail"
                            helperText={emailMessage}
                            error={!!emailMessage}
                            control={control}
                            icon={<EmailIcon style={{ color: '#11c76f' }} />} 
                        />

                        <LoginInput
                            name="password"
                            label="Senha"
                            helperText={passwordMessage}
                            error={!!passwordMessage}
                            isPassword
                            control={control}
                            icon={<LockIcon style={{ color: '#11c76f' }} />} 
                        />
                        
                        <RememberAccountSection>
                            <Controller
                                name="rememberAccount" 
                                defaultValue={false}
                                control={control}
                                render={({ field }) => (
                                    <GreenCheckbox
                                        {...field} 
                                    />
                                )}
                            />
                            <LightTextRegister fontSize={14}>Lembrar usu??rio?</LightTextRegister>
                        </RememberAccountSection>
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