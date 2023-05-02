import {Route, Routes, useLocation} from "react-router-dom";

import HomePage from "./HomePage";
import Page2 from "./AboutPage";

interface Props {
    setPageState: (pageState: string) => void;
}

const AnimatedRoutes = (props: Props) => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/page2" element={<Page2 />} />
        </Routes>
    );
};

export default AnimatedRoutes;