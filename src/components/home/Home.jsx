import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
// import HeaderSocials from './HeaderSocials';
// import ScrollDown from './ScrollDown';
import DevIcons from '../DevIcons/DevIcons';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Gaurav Mandal</h1>
              

                {/* <HeaderSocials /> */}
                {/* <DevIcons></DevIcons> */}
                
                {/* <a href="#contact" className="btn"> Contact Me</a> */}

                {/* <ScrollDown /> */}
            </div>
            <span className="home__education">Technologies I'm proficient in</span>
            <DevIcons/>
            <Shapes />
        </section>   
    )
}

export default Home