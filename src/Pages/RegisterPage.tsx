import React, { useState } from 'react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import {
    RegisterPageSection,
    RegisterFormSection
} from '../StyledComponents';

const RegisterPage: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <RegisterPageSection>
                <RegisterFormSection>
                </RegisterFormSection>
            </RegisterPageSection>
            <Footer />
        </div>
    )
}

export default RegisterPage;