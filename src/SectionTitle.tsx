import { motion } from "framer-motion";

interface Props {
    text : string;
}

const SectionTitle = ({text} : Props) => {
    return (
        <motion.div className="section-title"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}>
            {text}
        </motion.div>
    );
};

export default SectionTitle;