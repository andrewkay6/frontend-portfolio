import SectionTitle from "./SectionTitle";

const ContactPage = () => {
    return (
        <div className="page contact-container">
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
                            
                    </div>
            </div>
        </div>
    );
};

export default ContactPage;