import React from 'react';
import { BlurBlobs, ButtonPrimary } from '../Reusable';
import Lottie from 'react-lottie';
import pattern from '../assets/bgPattern.png';
import Code from '../assets/Vs Code.png';
import Logo from '../assets/Vs Logo.png';
import Github from '../assets/Github.png';
import Sparkle from '../assets/sparkles.json';
import '../../public/Styles/about.scss';

const AboutPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Sparkle,
        rendererSettings: {
            preserveAspectRatio: 'xMidyMid slice',
        }
    };

    return (
        <>
            <div className="HeroSection" >
                <div className="navbg" />
                <div className="text">
                    <h1>DECODE</h1>
                    <span>learn together grow together</span>
                </div>
                <div className="pattern">
                    <img src={pattern} />
                </div>
                <div className="reg_button" >
                    <ButtonPrimary text="start your journey now" to="/register" padding="8vw" height="9vh" margin="8vh" width="20vw" name="signUp_btn" shadow="BtnShadow" />
                </div>
                <div className="ImageSection">
                    <img src={Code} className="vs_code" />
                    <img src={Logo} className="vs_logo" />
                    <img src={Github} className="github" />
                    <div className="animation">
                        <Lottie options={defaultOptions} height={200} width={200} />
                    </div>
                    <div className="Blob codeBlob1">
                        <BlurBlobs height="80vh" width="80vh" className="top" />
                    </div>
                    <div className="Blob codeBlob2" >
                        <BlurBlobs height="80vh" width="80vh" className="bottom" />
                    </div>
                    <div className="Tagline">
                        <div className="line1">
                            <span>LEARN BY REAL LIFE PROJECTS</span>
                        </div>
                        <div className="line2">
                            <span>24 X 7 GUIDENCE</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
