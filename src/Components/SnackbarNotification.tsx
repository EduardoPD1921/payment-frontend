import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

interface SnackbarNotificationProps {
    isOpen: boolean;
    handleClose: (event?: React.SyntheticEvent, reason?: string) => void;
}

const SnackbarNotification: React.FC<SnackbarNotificationProps> = props => {
    return (
        <Snackbar open={props.isOpen} autoHideDuration={6000} onClose={props.handleClose}>
            <Alert onClose={props.handleClose} severity="success">
                Conta criada com sucesso!
            </Alert>
        </Snackbar>
    )
}

export default SnackbarNotification;