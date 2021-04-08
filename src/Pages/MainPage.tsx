import React, { useState, useEffect } from 'react';
// import Cookie from 'js-cookie';

import '../Static/Css/index.css';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Snackbar from '../Components/SnackbarNotification';

const MainPage: React.FC = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    console.log(sessionStorage.getItem('test'));

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

    return (
        <div className="app">
            <Navbar mainPage />
            <Header />
            <Footer />
            <Snackbar isOpen={snackbarOpen} handleClose={handleClose} />
        </div>
    )
}

export default MainPage;