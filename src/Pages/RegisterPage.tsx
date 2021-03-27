import React, { useState } from 'react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Image from '../Static/Images/bitcoin-trading.svg';

import Grid from '@material-ui/core/Grid';

import UserIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import LockIcon from '@material-ui/icons/Lock';

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
    const [birthdate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');

    const onChangeTextHandle = (value: string, type: string) => {
        switch (type) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'birthDate':
                return setBirthDate(value);
            case 'password':
                return setPassword(value);
            default:
                console.log(type);
        }
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
                        <Grid style={{ marginLeft: 20 }} container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <UserIcon style={{ color: '#11c76f' }} />
                            </Grid>
                            <Grid item>
                                <CustomTextField onChange={e => onChangeTextHandle(e.target.value, 'email')} value={name} label="Nome" />
                            </Grid>
                        </Grid>

                        <Grid style={{ marginLeft: 20, marginTop: 30 }} container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmailIcon style={{ color: '#11c76f' }} />
                            </Grid>
                            <Grid item>
                                <CustomTextField label="E-mail" />
                            </Grid>
                        </Grid>

                        <Grid style={{ marginLeft: 20, marginTop: 30 }} container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EventIcon style={{ color: '#11c76f' }} />
                            </Grid>
                            <Grid item>
                                <CustomTextField type="text" label="Data de nascimento" />
                            </Grid>
                        </Grid>

                        <Grid style={{ marginLeft: 20, marginTop: 30 }} container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <LockIcon style={{ color: '#11c76f' }} />
                            </Grid>
                            <Grid item>
                                <CustomTextField type="password" label="Senha" />
                            </Grid>
                        </Grid>

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