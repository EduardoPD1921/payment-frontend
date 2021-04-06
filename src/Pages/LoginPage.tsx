import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import Grid from '@material-ui/core/Grid';

import {
    FormSection,
    DefaultFormSection,
    DefaultButton,
    CustomTextField
} from '../StyledComponents';

interface InputValues {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const { handleSubmit, control } = useForm<InputValues>();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div className="app">
            <Navbar />
            <FormSection height={800}>
                <DefaultFormSection alignItems="center" flexDirection="column" width="20%" height={500}>
                    <AccountCircleIcon style={{ color: '#11c76f', fontSize: 100 }} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={1} alignItems="flex-end">
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
                                            width="90%"
                                            label="E-mail"
                                            {...field} 
                                        />
                                    )} 
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
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
                                            width="90%"
                                            label="Senha"
                                            {...field} 
                                        />
                                    )} 
                                />
                            </Grid>
                        </Grid>
                        <DefaultButton type="submit" borderRadius="6px" backgroundDefault="#11c76f" backgroundHover="#10ad61">
                            Entrar
                        </DefaultButton> 
                    </form>
                </DefaultFormSection>
            </FormSection>
            <Footer />
        </div>
    )
}

export default LoginPage;