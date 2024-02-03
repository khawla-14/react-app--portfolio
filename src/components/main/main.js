import Header from '../header/header';
import '../header/header.css';
import BodyContainer from '../BodyContainer/bodyContainer';
import React from 'react';
import CustomCursor from '../cursor/cursor';
import './main.css'

const Main = () => {
    return (
        <div className="main">
            <CustomCursor />
            <Header />
            <BodyContainer />

        </div>
    );
}

export default Main;
