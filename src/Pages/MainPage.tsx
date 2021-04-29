import React, { useState, useEffect } from 'react';
// import Cookie from 'js-cookie';

import '../Static/Css/index.css';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SearchCard from '../Components/SearchCard';
import Snackbar from '../Components/SnackbarNotification';

import Loading from '@material-ui/core/CircularProgress';

import {
    SearchSection,
    LightText,
    LightTextRegister,
    SearchResults
} from '../StyledComponents';

const MainPage: React.FC = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [currentSearch, setCurrentSearch] = useState('');
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

    const renderSearchText = () => {
        if (currentSearch) {
            return <LightText marginLeft={20} fontSize={20}>Exibindo resultados por: <LightTextRegister fontSize={20}>{currentSearch}</LightTextRegister></LightText>
        }

        return <Loading />
    }

    return (
        <div className="app">
            <Navbar mainPage />
            <Header setCurrentSearch={setCurrentSearch} setSearchResult={setSearchedUsers} />
            <SearchSection>
                {renderSearchText()}
                <SearchResults>
                    {searchedUsers && searchedUsers.map((element: any, key: any) => {
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
            </SearchSection>
            <Footer />
            <Snackbar message="Conta criada com sucesso!" isOpen={snackbarOpen} handleClose={handleClose} />
        </div>
    )
}

export default MainPage;