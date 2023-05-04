import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import projects, { Project } from "./ProjectsData";
import { motion } from "framer-motion";

const ProjectsPage = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        setCurrentImage(0);
    }, [currentProject]);

    const handleRightArrowClick = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const handleLeftArrowClick = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    const currentProjectData: Project = projects[currentProject];

    return (
        <div className="projects-container page">
            <SectionTitle>Projects</SectionTitle>
            <motion.div
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ duration: 1 }}
                className="projects-main-container"
                >
                <div className="arrow-container">
                    <ArrowIcon className="arrow arrow-left raised-button" onClick={handleLeftArrowClick} />
                </div>
                <motion.div
                    key={currentProject}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="projects-content-container"
                >
                    <div className="section-subtitle">
                        {currentProjectData.name}
                    </div>
                    <div className="project-images-container">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="project-image-main">
                            <img src={currentProjectData.images[currentImage]} alt={currentProjectData.name} />
                        </motion.div>
                        <div className="project-image-divider" />
                        <div className="project-image-selector-container">
                            {currentProjectData.images.map((image, index) => (
                                <div
                                    key={index} className="project-image-selector" onClick={() => setCurrentImage(index)}>
                                    <img src={image} alt={currentProjectData.name} />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="project-details-container">
                        <p>{currentProjectData.description}</p>
                        <div className="section-subtitle" style={{ fontWeight: "normal" }}>Links</div>
                        <div className="project-links-container">
                            {currentProjectData.links.map((link, index) => (
                                <div key={index} className="project-link-container raised-button" onClick={() => window.open(link.url, "_blank")} style={{ cursor: "pointer" }}>
                                    {link.icon ? <><img src={link.icon} alt={link.name} /> <div className="project-link-text">{link.name}</div> </> : link.name}
                                </div>
                            ))}
                        </div>
                    </div>

                </motion.div>
                <div className="arrow-container">
                    <ArrowIcon className="arrow arrow-right raised-button" onClick={handleRightArrowClick} />
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectsPage;