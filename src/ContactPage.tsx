import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import motionProps from "./PageMotionProps";
import {ReactComponent as MailIcon} from "./images/email.svg";
import {ReactComponent as PhoneIcon} from "./images/phone.svg";

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
                                <MailIcon className="contact-svg"/>
                                &nbsp;andyjohnkay10@gmail.com
                            </a>
                            <a href="mailto:kaya6@mcmaster.ca">
                                <MailIcon className="contact-svg"/>
                                &nbsp;kaya6@mcmaster.ca
                            </a>


                            <a href="tel:289-682-1655" className="contact-link"> 
                                <PhoneIcon className="contact-svg"/> 
                                &nbsp;289-682-1655</a>
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