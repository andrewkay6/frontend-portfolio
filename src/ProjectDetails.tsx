import { Project } from "./ProjectsData";

interface Props {
    currentProjectData: Project;
}

const ProjectDetails = ({ currentProjectData }: Props) => {
    return (
        <div className="project-details-container">
            <div style={{ textAlign: "center" }}>{currentProjectData.description}</div>
            <div className="section-subtitle" style={{ fontWeight: "normal" }}>Links</div>
            <div className="project-links-container">
                {currentProjectData.links.map((link, index) => (
                    <div key={index} className="project-link-container raised-button" onClick={() => window.open(link.url, "_blank")} style={{ cursor: "pointer" }}>
                        {link.icon ? <><img src={link.icon} alt={link.name} /> <div className="project-link-text">{link.name}</div> </> : link.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetails;