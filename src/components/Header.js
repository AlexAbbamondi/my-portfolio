import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion'

import Logo from "../assets/images/Logo.jpg"
import Resume from "../assets/pdf/Web_Developer_Resume.pdf"

const Header = ({ onToggle, showNavbar }) => {

    const handleNavLinkClick = () => {
        onToggle(); // This will close the navbar
    };

    const handleMenuIconClick = () => {
        onToggle(); // Toggle the menu when the menu icon is clicked
    };

    return (
        <header>
            <nav className="navbar">
                <motion.div
                    className="logo"
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <img src={Logo} alt="description of gif" width="70px" height="60px" />

                </motion.div>
                <div className={`menu-icon ${showNavbar ? 'toggle' : ''}`} onClick={handleMenuIconClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`nav-links ${showNavbar ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Link
                                    activeClass="active"
                                    to="Skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-120}
                                    duration={500}
                                    onClick={handleNavLinkClick}
                                >
                                    SKILLS
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Link
                                    activeClass="active"
                                    to="Experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={handleNavLinkClick}
                                >
                                    EXPERIENCE
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Link
                                    activeClass="active"
                                    to="Projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={handleNavLinkClick}
                                >
                                    PROJECTS
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Link
                                    activeClass="active"
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={handleNavLinkClick}
                                >
                                    CONTACT
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <a href={Resume} className="resume-link" rel="noreferrer" target="_blank">RESUME</a>
                            </motion.div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>



    )
}

export default Header