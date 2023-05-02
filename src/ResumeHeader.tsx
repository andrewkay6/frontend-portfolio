
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
const ResumeHeader = () => {
    return (
        <div className="resume-title-section">
            <SectionTitle
                children="Resume"
            />
            <motion.div className='resume-download-button'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                🡇
            </motion.div>
        </div>
    );
};

export default ResumeHeader;