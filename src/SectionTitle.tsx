import { motion } from "framer-motion";
import motionProps from "./PageMotionProps";
interface Props {
    children : string | JSX.Element | JSX.Element[];
}

const SectionTitle = ({children} : Props) => {
    return (
        <motion.div className="section-title"
        {...motionProps}>
            {children}
        </motion.div>
    );
};

export default SectionTitle;