import { motion } from "framer-motion";

const HomePage = () => {
    return (
    <div className="page home-container">  
        <motion.div className="home-title"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        >Andrew Kay
        </motion.div>
        <motion.div 
        className="home-subtitle"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        
        >
            Software Developer
        </motion.div>
    </div>
    );
};

export default HomePage;