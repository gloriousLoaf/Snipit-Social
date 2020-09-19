// BANNER
import React from 'react';
import Snipit from '../snipit.png';

const Banner = () => {

    return (
        <>
            <div className="card container my-3 py-2 d-flex justify-content-center" id="social">
                <img src={Snipit} alt="Snipit" style={{ maxHeight: "6rem" }} />
            </div>
        </>
    )
};

export default Banner;