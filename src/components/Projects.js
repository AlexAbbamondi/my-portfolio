import React, { useState } from 'react';
import { motion } from 'framer-motion'

import Modal from "./Modal"

import DoctorSearch from "../assets/images/projects/Doctor-Search.png"
import Everytown from "../assets/images/projects/Everytown-USA.png"
import VaCalc from "../assets/images/projects/VA-Calculator.png"
import RedditMonitor from "../assets/images/projects/reddit-monitor.png"
import WebCrawler from "../assets/images/projects/web-crawler.png"

import github from "../assets/images/skills/github.svg"
import newTab from "../assets/images/new-tab-icon.svg"

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const projects = [
    {
      title: 'Doctor Search',
      image: DoctorSearch,
      skills: 'React <span>•</span> Geolib <span>•</span> Axios <span>•</span> React Paginate',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'EveryTown USA',
      image: Everytown,
      skills: 'jQuery <span>•</span> KineticJS <span>•</span> HTML <span>•</span> CSS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Reddit Monitor',
      image: RedditMonitor,
      skills: 'Python <span>•</span> PRAW <span>•</span> Smtplib <span>•</span> Dotenv <span>•</span> Pytz',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'VA Calculator',
      image: VaCalc,
      skills: 'React <span>•</span> JavaScript <span>•</span> HTML <span>•</span> CSS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Website Crawler',
      image: WebCrawler,
      skills: 'Python <span>•</span> Requests <span>•</span> Beautifulsoup4 <span>•</span> Urllib',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const loadMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3);
  };

  const openModal = (project) => {
    setModalContent(
      <div>
        {/* <h3>{project.title}</h3> */}
        <img src={project.image} alt={project.title} />
        {/* <p>{project.description}</p> */}
      </div>
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section className="projects" id="Projects">
            <Modal isVisible={isModalOpen} onClose={closeModal} content={modalContent} />

      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-flex-container">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              className={`project ${index % 2 === 1 ? 'project-flip' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-text-container">
                <p className="">Featured Project</p>
                <div className="project-description-container">
                  <h3>{project.title}</h3>
                  <div className="project-description">
                    <p className="">{project.description}</p>
                  </div>
                </div>
                <div className="project-bottom-text">
                  <p className="project-skills"><div dangerouslySetInnerHTML={{ __html: project.skills }} /></p>
                  <div className="project-links">
                    <a href="#">
                      <img src={github} alt="GitHub" width="30" height="30" />
                    </a>
                    <a href="#">
                      <img src={newTab} alt="New Tab" width="30" height="30" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <button onClick={loadMoreProjects}>Load More</button>
        )}
      </div>
    </section>
  );
};

export default Projects;