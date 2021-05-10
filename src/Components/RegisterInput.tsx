import React from 'react';
import { useController } from 'react-hook-form';

import Grid from '@material-ui/core/Grid';

import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import LockIcon from '@material-ui/icons/Lock';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import { CustomTextField } from '../StyledComponents';

interface RegisterInputProps {
    name: string;
    label: string;
    helperText?: string;
    error?: boolean;
    control: any;
}

const RegisterInput: React.FC<RegisterInputProps> = props => {
    const { field: {ref, ...inputProps} } = useController({
        name: props.name,
        control: props.control,
        defaultValue: ""
    })

    return (
        <CustomTextField
            {...inputProps}
            label={props.label}
            helperText={props.helperText}
            error={props.error} 
        />
    )
}

export default RegisterInput;