import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const jobDetails = {
    'BCBH Technologies': {
      title: 'Full-Stack Developer',
      period: 'Feb 2022 – Present',
      responsibilities: [
        'Developed and maintained 4 WordPress sites, primary attention on MesotheliomaGuide.com, with a focus on performance and SEO.',
        'Utilized AWS (EC2, S3, RDS, CloudFront) and Python for backend management.',
        'Created interactive React applications to enhance user engagement.',
        'Implemented technical SEO strategies, including schema and metadata optimizations.',
        'Managed security and caching using Cloudflare.',
      ],
    },
    'Banyan Treatment Center': {
      title: 'Frontend Developer',
      period: 'Mar 2021 – Feb 2022',
      responsibilities: [
        'Managed 14 WordPress sites, ensuring top performance and SEO best practices.',
        'Built custom e-commerce solutions using WooCommerce and Printful.',
        'Optimized websites with HTML, CSS, JavaScript, and Photoshop for design.'
      ],
    },
    'SanMelix Labs': {
      title: 'Frontend Developer',
      period: 'Sep 2020 – Mar 2021',
      responsibilities: [
        'Developed a WordPress site for a buckwheat honey wound care product, utilizing Photoshop, HTML, and CSS.'
      ],
    },
  };

  const [selectedJob, setSelectedJob] = useState('BCBH Technologies');
  const [maxHeight, setMaxHeight] = useState(0);
  const jobRefs = useRef(Object.keys(jobDetails).map(() => React.createRef()));

  useEffect(() => {
    const maxHeight = Math.max(
      ...jobRefs.current.map((ref) => ref.current ? ref.current.offsetHeight : 0)
    );
    setMaxHeight(maxHeight);
  }, []);

  const handleButtonClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <section className="experience" id="Experience">
      <motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2>Experience</h2>
        <div className="experience-flex-container">
          <div className="experience-buttons-slider">
          {Object.keys(jobDetails).map((job) => (
              <button
                key={job}
                className={`experience-button ${selectedJob === job ? 'active' : ''}`}
                onClick={() => handleButtonClick(job)}
              >
                {job}
              </button>
            ))}
          </div>
          <div className="job" style={{ minHeight: `${maxHeight}px` }}>
            <h3>{jobDetails[selectedJob].title}</h3>
            <p>{jobDetails[selectedJob].period}</p>
            <ul ref={jobRefs.current[Object.keys(jobDetails).indexOf(selectedJob)]}>
              {jobDetails[selectedJob].responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience