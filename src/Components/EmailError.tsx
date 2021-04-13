import React from 'react';

import ErrorIcon from '@material-ui/icons/Error';

import { LightTextRegister } from '../StyledComponents';

const EmailError: React.FC = () => {
    return (
        <React.Fragment>
            <LightTextRegister marginRight={15} fontSize={14}>Confirme seu e-mail</LightTextRegister>
            <ErrorIcon style={{ color: 'red' }} />
        </React.Fragment>
    )
}

export default EmailError;