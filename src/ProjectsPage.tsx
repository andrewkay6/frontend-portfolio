import { useState, useEffect } from "react";

import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import projects, { Project } from "./ProjectsData";
import { motion } from "framer-motion";
import ImagePreview from "./ImagePreview";
import ProjectDetails from "./ProjectDetails";
import motionProps from "./PageMotionProps";
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
            {...motionProps}
            className="projects-container page">
            <div
                className="projects-main-container"
            >
                <div className="arrow-container">
                    <ArrowIcon className="arrow arrow-left raised-button" onClick={handleLeftArrowClick} />
                </div>
                <motion.div
                    key={currentProject}
                    {...motionProps}
                    className="projects-content-container"
                >
                    <div className="section-title">
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
            </div>

        </motion.div>
    );
};

export default ProjectsPage;