import SectionTitle from "./SectionTitle";
const AboutPage = () => {
    return (
        <div className="page about-container">
            <SectionTitle children="About" />
            <div className="about-content">
                <div className="about-image-container" >
                    <img src="https://media.licdn.com/dms/image/C4D03AQGXtDEXjJ5pOQ/profile-displayphoto-shrink_800_800/0/1641962624883?e=1688601600&v=beta&t=IP-Jeb1Jp92h0FobaJ31xEbza97Rqkluy9hktQqmgv0" alt="Profile" />
                </div>

                <div className="about-text">
                    Hi, I'm Andrew! I am a software developer with experience in web development and consulting. Business and software requirements are not only about what's written on the page - it's important to anticipate the needs of the client and to be able to communicate effectively. I believe in writing modular, reusable code that is easy to read and understand.
                </div>
                <br />
                <div className="about-text">
                    I have a passion for problem solving, and am able to adapt to new environments quickly. I have experience with Java, Python, and TypeScript, but I'm always open to learning new languages and frameworks.
                </div>

            </div>
        </div>
    );
};

export default AboutPage;