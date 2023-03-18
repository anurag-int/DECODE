import React, { useState } from 'react';
import { BlurBlobs, ButtonPrimary } from '../Reusable';
import pattern from '../assets/bgPattern.png';
import Code from '../assets/Vs Code.png';
import '../../public/Styles/about.scss';
const AboutPage = () => {

    const [nav, setNav] = useState(false);

    const scroll = () => {
        let count = 0;
        if (window.scroll > 1) {
            count++;
        }
        console.log(window.scrollY);
    }

    return (
        <>
            <div className="HeroSection" onScroll={scroll} >
                <div className="navbg" />
                <div className="text">
                    <h1>DECODE</h1>
                    <span>learn together grow together</span>
                </div>
                <div className="pattern">
                    <img src={pattern} />
                </div>
                <div className="reg_button">
                    <ButtonPrimary text="start your journey now" to="/register" padding="8vw" height="9vh" margin="8vh" width="20vw" name="signUp_btn" shadow="BtnShadow" />
                </div>
                <div className="ImageSection">
                    <img src={Code} className="vs_code" />
                    <div className="Blob codeBlob1">
                        <BlurBlobs height="80vh" width="80vh" className="top" />
                    </div>
                    <div className="Blob codeBlob2" >
                        <BlurBlobs height="80vh" width="80vh" className="bottom" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
