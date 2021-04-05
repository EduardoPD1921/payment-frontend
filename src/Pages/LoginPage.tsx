import React from 'react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import {
    FormSection,
    DefaultFormSection
} from '../StyledComponents';

const LoginPage: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <FormSection height={700}>
                <DefaultFormSection flexDirection="column" width="100px" height={200}>
                    test
                </DefaultFormSection>
            </FormSection>
            <Footer />
        </div>
    )
}

export default LoginPage;