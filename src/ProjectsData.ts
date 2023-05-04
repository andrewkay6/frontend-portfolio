

export interface Project {
    name: string;
    description: string;
    links: LinkObject[];
    images: string[];
}
export interface LinkObject {
    name: string;
    url: string;
    icon?: string;
}


const projects: Project[] = [
    {
        name: "Machining Solutions",
        description: 
        `
        Machining Solutions is a company that provides graphite machining in the Kitchener-Waterloo area. I reached out to them because I noticed their website could use an update. 
        I repurposed some of the old content and made a new website using React and Typescript. They told me their main goal was to make the website more modern and mobile friendly, so I designed it with a focus on mobile first. 
        `,
        links : [
            {
                name: "Live Link",
                url: "https://andrewkay6.github.io/machining-solutions/",
                icon: "/images/machining-solutions-favicon.png"
            },
            {
                name: "Frontend Github",
                url: "https://github.com/andrewkay6/machining-solutions",
                icon: "/images/github.svg"
            },
        ],
        images: [
            "/images/machining-solutions1.png",
            "/images/machining-solutions2.png",
            "/images/machining-solutions3.png",
            "/images/machining-solutions4.png",
        ]
    },
    {
        name: "Chat Stack",
        description: 
        `
        Chat Stack is a proof of concept chat application that I made using React, Javascript, and Python/Flask. The database is a MariaDB/MySQL hosted on a Digital Ocean droplet.
        I wanted to learn a full stack that would let me get from idea to proof of concept, quickly. The app communicates with the backend using a combination of RESTful API calls and web sockets.
        The app supports login authentication and is encrypted using bcrypt.
        `,
        links : [
            {
                name: "Frontend Github",
                url: "https://github.com/andrewkay6/chatstack-frontend",
                icon: "/images/github.svg"
            },
            {
                name: "Backend Github",
                url: "https://github.com/andrewkay6/chatstack-backend",
                icon: "/images/github.svg"
            }
        ],
        images: [
            "/images/chatstack1.png",
            "/images/chatstack2.png",
            "/images/chatstack3.png",
            "/images/chatstack4.png",
            "/images/chatstack5.png",
        ]
    }


];


export default projects;

