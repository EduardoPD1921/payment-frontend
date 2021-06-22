import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

import '../Static/Css/index.css';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SearchCard from '../Components/SearchCard';
import Snackbar from '../Components/SnackbarNotification';
import ModalBody from '../Components/ModalBody';

import Modal from '@material-ui/core/Modal';
import Loading from '@material-ui/core/CircularProgress';

import ErrorIcon from '@material-ui/icons/Error';

import {
    SearchSection,
    SearchResults,
    LightText,
    ErrorSection
} from '../StyledComponents';

interface TransactionErrorProps {
    amount?: Array<string>;
    message?: string;
}

const cookie_token = Cookie.get('authToken');
const session_token = sessionStorage.getItem('authToken');

const MainPage: React.FC = () => {
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [transactionSnackbarOpen, setTransactionSnackbarOpen] = useState<boolean>(false);
    const [searchLoading, setSearchLoading] = useState<boolean>(false);
    const [searchErrorMessage, setSearchErrorMessage] = useState<string>('');
    const [currentSearch, setCurrentSearch] = useState<string>('');
    const [searchedUsers, setSearchedUsers] = useState<any>();

    const [transactionValue, setTransactionValue] = useState<string>('');
    const [transactionReceiverId, setTransactionReceiverId] = useState<string>('');

    const [transactionErrorMessage, setTransactionErrorMessage] = useState<string>('');

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [isLoadingTransactionRequest, setIsLoadingTransactionRequest] = useState<boolean>(false);

    useEffect(() => {
        const storageSnackbar = localStorage.getItem('snackbarOpen');

        if (storageSnackbar) {
            setSnackbarOpen(true);
            localStorage.removeItem('snackbarOpen');
        }
    }, []);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    }

    const handleTransactionSnackbarClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setTransactionSnackbarOpen(false);
    }

    const renderSearchResults = () => {
        if (searchLoading) {
            return <Loading style={{ alignSelf: 'center', color: '#11c76f' }} />
        } else if (searchErrorMessage) {
            return (
                <ErrorSection>
                    <ErrorIcon style={{ marginRight: 10 }} />
                    {searchErrorMessage}
                </ErrorSection>
            )
        } else if (!searchLoading && searchedUsers) {
            return (
                <React.Fragment>
                    <LightText marginLeft={25} fontSize={20}>Exibindo resultados por: {currentSearch}</LightText>
                    <SearchResults>
                        {searchedUsers.map((element: any, key: any) => {
                            return (
                                <SearchCard
                                    onDepositClick={onDepositClick}
                                    avatar={element.image}
                                    name={element.name}
                                    email={element.email}
                                    id={element.id} 
                                />
                            )
                        })}
                    </SearchResults>
                </React.Fragment>
            )
        }
    }

    const onModalClose = () => {
        setModalOpen(false);
        setTransactionValue('');
        setTransactionErrorMessage('');
    }

    const onConfirmTransaction = () => {
        setIsLoadingTransactionRequest(true);
        const tmp = transactionValue.replaceAll('.', '');
        const transactionValueFormatted = tmp.replace(',', '.');

        const data = {
            receiver_id: transactionReceiverId,
            amount: parseFloat(transactionValueFormatted)
        }

        axios.post('http://127.0.0.1:8000/api/transaction/create', data, {
            headers: {
                'Authorization': `Bearer ${cookie_token || session_token}`
            }
        })
            .then(() => {
                setIsLoadingTransactionRequest(false);
                setTransactionSnackbarOpen(true);
                onModalClose();
            })
            .catch(error => onTransactionErrorHandler(error.response.data));
    }

    const onTransactionErrorHandler = (error: TransactionErrorProps) => {
        setIsLoadingTransactionRequest(false);

        if (error.message) {
            return setTransactionErrorMessage('O usuário precisa estar logado para efetuar transações!');
        }

        if (error.amount) {
            return setTransactionErrorMessage(error.amount[0]);
        }

        return setTransactionErrorMessage('Erro do servidor!');
    }

    const onDepositClick = (receiverId: string) => {
        setTransactionReceiverId(receiverId);
        setModalOpen(true);
    }

    return (
        <div className="app">
            <Navbar mainPage />
            <Modal
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                open={modalOpen}
                onClose={onModalClose}
            >
                <ModalBody
                    isLoadingTransactionRequest={isLoadingTransactionRequest}
                    transactionValue={transactionValue}
                    setTransactionValue={setTransactionValue}
                    onConfirmTransaction={onConfirmTransaction}
                    onModalClose={onModalClose}
                    transactionErrorMessage={transactionErrorMessage} 
                />
            </Modal>
            <Header 
                setSearchLoading={setSearchLoading} 
                setCurrentSearch={setCurrentSearch} 
                setSearchResult={setSearchedUsers}
                setSearchErrorMessage={setSearchErrorMessage}
            />
            <SearchSection>   
                {renderSearchResults()}
            </SearchSection>
            <Footer />
            <Snackbar 
                message="Conta criada com sucesso!" 
                isOpen={snackbarOpen} 
                handleClose={handleClose} 
            />
            <Snackbar
                message="Transação efetuada com sucesso!" 
                isOpen={transactionSnackbarOpen}
                handleClose={handleTransactionSnackbarClose}
            />
        </div>
    )
}

export default MainPage;