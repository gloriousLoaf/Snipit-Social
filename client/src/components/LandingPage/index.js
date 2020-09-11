// LANDINGPAGE
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import './style.css';

// LeftSide (blue) is static,
// RightSide (black) has Modal built-in
const LandingPage = () => {

    return (
        <div className="d-md-flex h-md-100 align-items-center">

            <LeftSide />

            <RightSide />

        </div>
    )
}

export default LandingPage;