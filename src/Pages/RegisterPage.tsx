import React, { useState } from 'react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Image from '../Static/Images/bitcoin-trading.svg';

import Grid from '@material-ui/core/Grid';

import UserIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';

import {
    RegisterPageSection,
    RegisterFormSection,
    RegisterFormIllustration,
    RegisterFormInputs,
    RegisterIllustration,
    CustomTextField,
    RegisterFormTitle
} from '../StyledComponents';

const RegisterPage: React.FC = () => {
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
                                <CustomTextField label="Nome" />
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
                    </RegisterFormInputs>
                </RegisterFormSection>
            </RegisterPageSection>
            <Footer />
        </div>
    )
}

export default RegisterPage;