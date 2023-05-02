import { motion } from "framer-motion";
interface Props {
    children : string | JSX.Element | JSX.Element[];
}

const SectionTitle = ({children} : Props) => {
    return (
        <motion.div className="section-title"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}>
            {children}
        </motion.div>
    );
};

export default SectionTitle;