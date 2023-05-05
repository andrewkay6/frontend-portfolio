import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
const ContactPage = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}} 
        className="page contact-container">
            <SectionTitle children="Contact" />

            <div className="contact-content-container">                 
                        <div className="contact-text-item-content">
                            <a href="mailto:andyjohnkay10@gmail.com">
                                ✉ andyjohnkay10@gmail.com
                            </a>
                            <br/>
                            <a href="mailto:kaya6@mcmaster.ca">
                                ✉ kaya6@mcmaster.ca
                            </a>
                            <br/>
                            <a href="tel:289-682-1655"> ☎ 289-682-1655</a>
                            <br/>
                            <a href="https://www.linkedin.com/in/andrew-kay-655344211/" target="_blank" rel="noreferrer">
                                <img src="/images/linkedin.svg" alt="LinkedIn" className="linkedin-SVG"/>
                                    &nbsp;LinkedIn
                                </a>                         
                    </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;