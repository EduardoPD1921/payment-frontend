import React, { useState, useEffect } from 'react';
// import Cookie from 'js-cookie';

import '../Static/Css/index.css';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SearchCard from '../Components/SearchCard';
import Snackbar from '../Components/SnackbarNotification';

import Loading from '@material-ui/core/CircularProgress';

import ErrorIcon from '@material-ui/icons/Error';

import {
    SearchSection,
    SearchResults,
    LightText,
    // ErrorMessage,
    ErrorSection
} from '../StyledComponents';

const MainPage: React.FC = () => {
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [searchLoading, setSearchLoading] = useState<boolean>(false);
    const [searchErrorMessage, setSearchErrorMessage] = useState<string>('');
    const [currentSearch, setCurrentSearch] = useState<string>('');
    const [searchedUsers, setSearchedUsers] = useState<any>();

    useEffect(() => {
        const storageSnackbar = localStorage.getItem('snackbarOpen');

        if (storageSnackbar) {
            setSnackbarOpen(true);
            localStorage.removeItem('snackbarOpen');
        }
    }, [])

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
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

    return (
        <div className="app">
            <Navbar mainPage />
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
            <Snackbar message="Conta criada com sucesso!" isOpen={snackbarOpen} handleClose={handleClose} />
        </div>
    )
}

export default MainPage;