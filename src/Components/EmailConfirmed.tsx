import React from 'react';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { LightTextRegister } from '../StyledComponents';

const EmailConfirmed: React.FC = () => {
    return (
        <React.Fragment>
            <CheckCircleIcon style={{ color: '#11c76f', marginRight: 10 }} />
            <LightTextRegister fontSize={14}>E-mail confirmado</LightTextRegister>
        </React.Fragment>
    )
}

export default EmailConfirmed;