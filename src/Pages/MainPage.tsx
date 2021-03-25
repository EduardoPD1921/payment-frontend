import React from 'react';

import '../Css/index.css';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';

const MainPage: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
        </div>
    )
}

export default MainPage;