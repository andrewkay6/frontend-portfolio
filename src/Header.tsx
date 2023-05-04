import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
    setPageState: (pageState: string) => void;
    pageState: string;
}

interface HeaderLink {
    stateName: string;
    text: string;
    link: string;
}

const Header = ({ pageState, setPageState }: Props) => {
    const headerLinks: HeaderLink[] = [
        {
            stateName: "home",
            text: "Home",
            link: "/"
        },
        {
            stateName: "about",
            text: "About",
            link: "/about"
        },
        {
            stateName: "projects",
            text: "Projects",
            link: "/projects"
        },
        {
            stateName: "resume",
            text: "Resume",
            link: "/resume"
        },
        {
            stateName: "contact",
            text: "Contact",
            link: "/contact"
        }
    ];

    return (
        <div className="header-container">
            {headerLinks.map(({ text, link, stateName }, index) => (
                <motion.div
                    className="header-link-container"
                    key={stateName}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                    {/* <Link
                        to={link}
                        className="header-link"
                        onClick={() => setPageState(stateName)}
                    >
                        {text}
                    </Link> */}
                    <div className="header-link">{text}</div>
                </motion.div>
            ))}
        </div>
    );
};

export default Header;
