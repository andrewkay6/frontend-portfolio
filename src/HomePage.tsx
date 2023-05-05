import { motion } from "framer-motion";
import motionProps from "./PageMotionProps";
const HomePage = () => {
    return (
        <motion.div
        {...motionProps}
            className="page home-container">
            <div className="home-title">
                Andrew Kay
            </div>
            <div className="home-subtitle">
                Interactive Resume & Portfolio
            </div>
        </motion.div>
    );
};

export default HomePage;