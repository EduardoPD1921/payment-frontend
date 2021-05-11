import React from 'react';
import { useController } from 'react-hook-form';

import Grid from '@material-ui/core/Grid';

import { CustomTextField } from '../StyledComponents';

interface LoginInputProps {
    name: string;
    label: string;
    helperText: string;
    error: boolean;
    isPassword?: boolean;
    control: any;
    icon: any;
}

const LoginInput: React.FC<LoginInputProps> = props => {
    const { field: {ref, ...inputProps} } = useController({
        name: props.name,
        control: props.control,
        defaultValue: ""
    })

    return (
        <Grid style={{ marginTop: 20 }} container spacing={1} alignItems="flex-end">
            <Grid item>
                {props.icon}
            </Grid>
            <Grid item>
                <CustomTextField
                    {...inputProps}
                    label={props.label}
                    helperText={props.helperText}
                    error={props.error}
                    type={props.isPassword ? 'password' : 'text'} 
                    width="90%"
                />
            </Grid>
        </Grid>
    )
}

export default LoginInput;