import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

import github from "../assets/images/github-white.svg"
import linkedin from "../assets/images/linkedin.svg"
import signature from "../assets/images/my-signature.png"
import Logo from "../assets/images/footer-logo.jpg"
import Resume from "../assets/pdf/Web_Developer_Resume.pdf"

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="Footer">
            <div className="footer-container">
                <div className="upper-footer">
                    <div className="upper-footer-left">
                        <p>Alex Abbamondi is a web developer and SEO expert with a specialism in WordPress and React</p>
                        <a href={Resume} className="button" rel="noreferrer" target="_blank">RESUME</a>
                        <img src={signature} alt="" width="211" height="55" />
                    </div>
                    <div className="upper-footer-middle">
                        <img src={Logo} alt="" width="70px" height="60px" />
                    </div>
                    <div className="upper-footer-right">
                        <nav>
                            <p>Links:</p>
                            <ul>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="Skills"
                                        spy={true}
                                        smooth={true}
                                        offset={-120}
                                        duration={500}
                                    >
                                        Skills
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        to="Experience"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Experience
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        to="Projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        to="Contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="lower-footer">
                    <div className="lower-footer-left">
                        <p>Alex Abbamondi • © {year} • All Rights Reserved</p>
                    </div>
                    <div className="lower-footer-right">
                        <a href="https://www.linkedin.com/in/alexabbamondi/">
                            <img src={linkedin} alt="" width="35" height="35" />
                        </a>
                        <a href="https://github.com/AlexAbbamondi/">
                            <img src={github} alt="" width="30" height="30" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer