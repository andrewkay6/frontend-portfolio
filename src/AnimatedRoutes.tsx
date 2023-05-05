import {Route, Routes, useLocation} from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ResumePage from "./ResumePage";
import ContactPage from "./ContactPage";

interface Props {
    setPageState: (pageState: string) => void;
}

const AnimatedRoutes = (props: Props) => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
};

export default AnimatedRoutes;