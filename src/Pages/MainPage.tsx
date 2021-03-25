import React from 'react';

import '../Static/Css/index.css';

import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainPage: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <Footer />
        </div>
    )
}

export default MainPage;