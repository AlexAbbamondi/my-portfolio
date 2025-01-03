import React from 'react'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from 'react-scroll';

import profile from "../assets/images/AlexA.jpg"
import handwave from "../assets/images/waving-hand.svg"
import signature from "../assets/images/my-signature.png"

const hero = () => {
  return (
    <section className="hero" id="Hero">
      <div className="hero-container">
        <motion.div
          className="hero-bubble-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img className="profile" src={profile} alt="Profile" width="20px" height="20px" />
          <div className="hero-bubble">
            <h1>Hi! I'm Alex Abbamondi.</h1>
            <img className="wave" src={handwave} alt="" width="" height="" />
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span>Web</span> Developer <span>& SEO</span> Specialist
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Welcome to my portfolio! I'm a full-stack web developer with 4+ years of experience, specializing in front-end development. Skilled in <span>WordPress, React, AWS, and technical SEO</span>, I build and optimize websites for better performance and user engagement, utilizing custom development and SEO strategies.
        </motion.p>
        <motion.img
          className="signature"
          src={signature}
          alt="Signature"
          width="330"
          height="86"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: .5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Link
            className='button'
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            CONTACT
        </Link>
        </motion.div>
      </div>
      <div className="hero-image">

      </div>
    </section>
  )
}

export default hero