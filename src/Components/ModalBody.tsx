import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import Loading from '@material-ui/core/CircularProgress';

import VMasker from 'vanilla-masker';

import {
    ModalTransaction,
    ModalTitle,
    ModalTitleSection,
    CustomTextField,
    TransactionValueSection,
    ModalActionsSection,
    ModalActionButton,
    ButtonSection
} from '../StyledComponents';

interface ModalBodyProps {
    transactionValue: string;
    transactionErrorMessage: string;
    isLoadingTransactionRequest: boolean;
    setTransactionValue: (value: string) => void;
    onModalClose: () => void;
    onConfirmTransaction: () => void;
}

const ModalBody: React.FC<ModalBodyProps> = props => {
    const onChangeHandler = (value: string) => {
        const maskedTransactionValue = VMasker.toMoney(value);
        props.setTransactionValue(maskedTransactionValue);
    }

    const loadingRender = () => {
        if (props.isLoadingTransactionRequest) {
            return <Loading style={{ color: '#11c76f' }} />
        }

        return (
            <React.Fragment>
                <ModalActionButton 
                    onClick={props.onModalClose}>
                    Cancelar
                </ModalActionButton>
                <ModalActionButton 
                    onClick={() => props.onConfirmTransaction()} 
                    deposit 
                    variant="contained" 
                    style={{ color: '#ffff' }}>
                    Depositar
                </ModalActionButton>
            </React.Fragment>
        )
    }

    return (
        <ModalTransaction>
            <ModalTitleSection>
                <AttachMoneyIcon style={{ color: '#11c76f', marginTop: 6 }} />
                <ModalTitle>Digite o valor do depósito</ModalTitle>
            </ModalTitleSection>
            <TransactionValueSection>
                <CustomTextField
                    onChange={e => onChangeHandler(e.target.value)}
                    value={props.transactionValue}
                    label="Valor"
                    variant="filled"
                    width="40%"
                    marginTop={10}
                    InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment> }}
                    helperText={props.transactionErrorMessage}
                    error={!!props.transactionErrorMessage}
                />
            </TransactionValueSection>
            <ButtonSection>
                <ModalActionsSection>
                    {loadingRender()}
                </ModalActionsSection>
            </ButtonSection>
        </ModalTransaction>
    )
}

export default ModalBody;