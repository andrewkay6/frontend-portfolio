import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import projects, { Project } from "./ProjectsData";
import { motion } from "framer-motion";
import ImagePreview from "./ImagePreview";
import ProjectDetails from "./ProjectDetails";

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
        <motion.div 
        initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
        className="projects-container page">
            {/* <SectionTitle>Projects</SectionTitle> */}
            <motion.div
                
                className="projects-main-container"
                >
                <div className="arrow-container">
                    <ArrowIcon className="arrow arrow-left raised-button" onClick={handleLeftArrowClick} />
                </div>
                <motion.div
                    // key={currentProject}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="projects-content-container"
                >
                    <div className="section-subtitle">
                        {currentProjectData.name}
                    </div>
                   <ImagePreview
                        currentProject={currentProject}
                        currentImage={currentImage}
                        setCurrentImage={setCurrentImage}
                        projects={projects}
                   />

                    <ProjectDetails 
                        currentProjectData={currentProjectData}
                    />

                </motion.div>
                <div className="arrow-container">
                    <ArrowIcon className="arrow arrow-right raised-button" onClick={handleRightArrowClick} />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectsPage;