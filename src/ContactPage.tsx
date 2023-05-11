import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import motionProps from "./PageMotionProps";

import process from "process"; 

const ContactPage = () => {
    return (
        <motion.div
        {...motionProps}
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
                                <img src={`${process.env.PUBLIC_URL}/images/linkedin.svg`} alt="LinkedIn" className="linkedin-SVG"/>
                                    &nbsp;LinkedIn
                                </a>                         
                    </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;