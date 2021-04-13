import React from 'react';

import ErrorIcon from '@material-ui/icons/Error';

import { LightTextRegister } from '../StyledComponents';

const EmailNotConfirmed: React.FC = () => {
    return (
        <React.Fragment>
            <ErrorIcon style={{ color: 'red', marginRight: 10 }} />
            <LightTextRegister fontSize={14}>Confirme seu e-mail</LightTextRegister>
        </React.Fragment>
    )
}

export default EmailNotConfirmed;