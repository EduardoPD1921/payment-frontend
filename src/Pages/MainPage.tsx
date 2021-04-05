import React, { useState, useEffect } from 'react';

// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

import '../Static/Css/index.css';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Snackbar from '../Components/SnackbarNotification';

const MainPage: React.FC = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    // const [drawerOpen, setDrawerOpen] = useState(false);

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

    // const list = () => {
    //     return (
    //         <React.Fragment>
    //             <List>
    //                 <ListItem>
    //                     Test
    //                 </ListItem>
    //                 <ListItem>
    //                     Test2
    //                 </ListItem>
    //             </List>
    //         </React.Fragment>
    //     )
    // }

    // const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    //     if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
    //         return;
    //     }

    //     setDrawerOpen(open);
    // }

    return (
        <div className="app">
            <Navbar mainPage />
            <Header />
            {/* <button onClick={toggleDrawer(true)}>test</button>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer> */}
            <Footer />
            <Snackbar isOpen={snackbarOpen} handleClose={handleClose} />
        </div>
    )
}

export default MainPage;