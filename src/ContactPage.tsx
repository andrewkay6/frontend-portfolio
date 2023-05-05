import SectionTitle from "./SectionTitle";

const ContactPage = () => {
    return (
        <div className="page contact-container">
            <SectionTitle children="Contact" />

            <div className="contact-content">
                <div className="contact-text">
                    <div className="contact-text-item">
                        <div className="contact-text-item-title">
                            Email:
                        </div>
                        <div className="contact-text-item-content">
                            Email 1:&nbsp;
                            <a href="mailto:andyjohnkay10@gmail.com">
                                andyjohnkay10@gmail.com 
                            </a>
                            Email 2:&nbsp;
                            <a href="mailto:kaya6@mcmaster.ca">
                                kaya6@mcmaster.ca
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;