import { motion } from "framer-motion";
import { Project } from "./ProjectsData";
import motionProps from "./PageMotionProps";
import { useState } from "react";
interface Props {
    currentProject: number;
    currentImage: number;
    setCurrentImage: (index: number) => void;
    projects: Project[];

}

const ImagePreview = ({currentProject, currentImage, setCurrentImage, projects} : Props) => {

    const [isMainImagePreview, setIsImageMainPreview] = useState(false); 

    const handleMainImageClick = () => {
        setIsImageMainPreview(true);
    }
    let mainImagePreview;

    if (isMainImagePreview) {
        mainImagePreview = (
            <div className="projects-main-image-preview-container">
                <button className="projects-main-image-preview-exit-button raised-button" onClick={() => setIsImageMainPreview(false)}>X</button>
                    <img src={projects[currentProject].images[currentImage]} alt={projects[currentProject].name} />
            </div>
        )
    }
    else {  
        mainImagePreview = (<></>)
    }

    const currentProjectData: Project = projects[currentProject];
    return ( 
        <div className="project-images-container">
        <motion.div
            {...motionProps}
            onClick={handleMainImageClick}
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
        {mainImagePreview}
    </div>
    );
}

export default ImagePreview;