import React from 'react'
import { motion } from 'framer-motion'

import HTML from "../assets/images/skills/html.svg"
import CSS from "../assets/images/skills/css.svg"
import JavaScript from "../assets/images/skills/JavaScript.svg"
import jQuery from "../assets/images/skills/jQuery.svg"
import react from "../assets/images/skills/react.svg"
import node from "../assets/images/skills/nodejs.svg"
import python from "../assets/images/skills/python.svg"
import php from "../assets/images/skills/php.png"

import wordpress from "../assets/images/skills/wordpress-icon.svg"
import woocommerce from "../assets/images/skills/woocommerce.svg"
import github from "../assets/images/skills/github.svg"
import cloudflare from "../assets/images/skills/cloudflare-icon.svg"


import aws from "../assets/images/skills/aws.svg"
import ec2 from "../assets/images/skills/ec2.png"
import lightsail from "../assets/images/skills/lightsail.svg"
import s3 from "../assets/images/skills/s3.svg"
import rds from "../assets/images/skills/rds.svg"
import cloudfront from "../assets/images/skills/cloudfront.svg"

import ga4 from "../assets/images/skills/google-analytics-4.svg"
import gsc from "../assets/images/skills/google-search-console.svg"
import semrush from "../assets/images/skills/semrush.png"
import ahrefs from "../assets/images/skills/ahrefs.svg"
import screamingfrog from "../assets/images/skills/screaming-frog.jpeg"
import jsonld from "../assets/images/skills/json-ld.svg"
import googleads from "../assets/images/skills/google-ads.svg"
import nitropack from "../assets/images/skills/nitropack.svg"
import hugo from "../assets/images/skills/hugo.png"

const Skills = () => {
    return (
        <section className="skills" id="Skills">
            <div className="skills-container">
                <motion.div
                    className="featured-skill"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="logo-container">
                        <img src={HTML} alt="" width="" height="" />
                        <img src={CSS} alt="" width="" height="" />
                        <img src={JavaScript} alt="" width="" height="" />
                        <img src={jQuery} alt="" width="" height="" />
                        <img src={react} alt="" width="" height="" />
                        <img src={node} alt="" width="" height="" />
                        <img src={python} alt="" width="" height="" />
                        <img src={php} alt="" width="" height="" />
                    </div>
                    <h3>Languages & Frameworks</h3>
                    <p>As a passionate and dedicated web developer, I leverage a diverse set of programming languages and frameworks to craft innovative solutions. Here’s a glimpse into my technical toolkit:</p>
                    <p className="skills-used">HTML, CSS, JavaScript, jQuery, React, Node.js, PHP, Python</p>
                </motion.div>
                <motion.div
                    className="skills-flex-container"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="skill">
                        <div className="logo-container">
                            <img src={wordpress} alt="" width="" height="" />
                            <img src={woocommerce} alt="" width="" height="" />
                            <img src={github} alt="" width="" height="" />
                            <img src={hugo} alt="" width="" height="" />
                            <img src={cloudflare} alt="" width="" height="" />
                            <img src={nitropack} alt="" width="" height="" />


                        </div>
                        <h3>CMS & Tools</h3>
                        <p>I harness powerful tools to create dynamic and secure digital experiences. Here’s how I leverage my expertise:</p>
                        <p className="skills-used">WordPress, WooCommerce, Git, Hugo, Cloudflare, Nitropack</p>
                    </div>
                    <div className="skill">
                        <div className="logo-container">
                            <img src={aws} alt="" width="" height="" />
                            <img src={ec2} alt="" width="" height="" />
                            <img src={lightsail} alt="" width="" height="" />
                            <img src={s3} alt="" width="" height="" />
                            <img src={rds} alt="" width="" height="" />
                            <img src={cloudfront} alt="" width="" height="" />
                        </div>
                        <h3>Cloud</h3>
                        <p>Harness the power of Amazon Web Services to elevate your infrastructure with reliability and scalability:</p>
                        <p className="skills-used">AWS (EC2, S3, RDS, LightSail, CloudFront)</p>
                    </div>
                    <div className="skill">
                        <div className="logo-container">
                            <img src={ga4} alt="" width="" height="" />
                            <img src={gsc} alt="" width="" height="" />
                            <img src={screamingfrog} alt="" width="" height="" />
                            <img src={jsonld} alt="" width="" height="" />
                            <img src={googleads} alt="" width="" height="" />
                            <img src={semrush} alt="" width="" height="" />
                            <img src={ahrefs} alt="" width="" height="" />


                        </div>
                        <h3>SEO</h3>
                        <p>Unlock the potential of search engine optimization to drive traffic, increase visibility, and boost online performance:</p>
                        <p className="skills-used">Technical SEO, Schemas, SEMrush, Ahrefs, Google Analytics, Screaming Frog, Google Search Console, Ads</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills