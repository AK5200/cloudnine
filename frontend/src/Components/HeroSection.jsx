import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar component exists

const HeroSection = () => {
    return (
        <section className='heroSection' id='heroSection'>    
            <div>
                {/* Video Background */}
                <div className="video-container">
                    <video className="video-background" autoPlay muted loop>
                        <source src="intro.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Navbar />

                    <h1 className='hero_title'>Town's Most Wanted Restaurants.</h1>
                </div>
                {/* <div className="banner">
                    <div className="largeBox">
                        <h1 className='title'>Town's Most Wanted Restaurants.</h1>
                    </div>
                </div> */}
               
            </div>
        </section>
    );
};

export default HeroSection;
