import { motion } from "framer-motion";
import { Project } from "./ProjectsData";

interface Props {
    currentProject: number;
    currentImage: number;
    setCurrentImage: (index: number) => void;
    projects: Project[];

}

const ImagePreview = ({currentProject, currentImage, setCurrentImage, projects} : Props) => {

    const currentProjectData: Project = projects[currentProject];
    return ( 
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
    );
}

export default ImagePreview;