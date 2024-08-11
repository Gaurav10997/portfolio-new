import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'
import { FaWhatsapp } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/Gaurav10997' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='https://hashnode.com/@Gauravsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            {/* <a href='https://dev.to/Gauravsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a> */}

            <a href='https://www.linkedin.com/in/gaurav1097/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            {/* <a href='https://wwww.facebook.com/Gaurav.Sithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a> */}

            <a href='https://leetcode.com/u/GauravMandal01/' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaCode />
            </a>

            <a href="https://wa.link/z53vcf" className='home__social-link' target='__blank' rel='noreferrer'>
                <FaWhatsapp/>
            </a>
        </div>
    );
};

export default HeaderSocials;
