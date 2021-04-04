import React from 'react';

import { CustomTextField } from '../StyledComponents';

import Grid from '@material-ui/core/Grid';

import UserIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import LockIcon from '@material-ui/icons/Lock';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

interface RegisterInputProps {
    label: string;
    type: string;
    value: string;
    errorMessage: string;
    error: boolean;
    onChangeTextHandler: (value: string, type: string) => void;
}

interface Inputs {
    name: string;
    email: string;
    birthDate: string;
    password: string;
    phone: string;
}

const RegisterInput: React.FC<RegisterInputProps> = props => {
    const renderIcon = () => {
        switch (props.type) {
            case 'name':
                return <UserIcon style={{ color: '#11c76f' }} />;
            case 'email':
                return <EmailIcon style={{ color: '#11c76f' }} />;
            case 'birthDate':
                return <EventIcon style={{ color: '#11c76f' }} />;
            case 'password':
                return <LockIcon style={{ color: '#11c76f' }} />;
            case 'phone':
                return <PhoneAndroidIcon style={{ color: '#11c76f' }} />;
            default:
                console.log(props.type);
        }
    }

    return (
        <Grid container style={{ marginLeft: 40, marginTop: 20 }} spacing={1} alignItems="flex-end">
            <Grid item>
                {renderIcon()}
            </Grid>
            <Grid item>
                {/* <CustomTextField 
                    label={props.label} 
                    type={props.type === 'password' ? 'password' : 'text'} 
                    value={props.value} 
                    onChange={e => props.onChangeTextHandler(e.target.value, props.type)}
                    error={props.error}
                    helperText={props.errorMessage} 
                /> */}
                <CustomTextField
                    label={props.type} 
                />
            </Grid>
        </Grid>
    )
}

export default RegisterInput;