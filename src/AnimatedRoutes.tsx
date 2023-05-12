import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ResumePage from "./ResumePage";
import ContactPage from "./ContactPage";


interface Props {
    setPageState: (pageState: string) => void;
    pageState: string;
}
const AnimatedRoutes = ({ setPageState, pageState }: Props) => {
    const location = useLocation();

    useEffect(() => {
        const stateFromPath = location.pathname.replace("/", "");
        setPageState(stateFromPath);

     }, [location.pathname ,setPageState]);

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
        </Routes>
    );
};

export default AnimatedRoutes;