
import process from "process";

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
        name: `Machining Solutions`,
        description:
            `
        Machining Solutions is a company that provides graphite machining in the Kitchener-Waterloo area. 
        I reached out to them because I noticed their website could use an update. 
        I repurposed some of the old content and made a new website using React and Typescript. 
        They told me their main goal was to make the website more modern and mobile friendly, so I designed it with a focus on mobile first. 
        `,
        links: [
            {
                name: `Live Link`,
                url: `https://andrewkay6.github.io/machining-solutions/`,
                icon: `${process.env.PUBLIC_URL}/images/machining-solutions-favicon.png`
            },
            {
                name: `Frontend Github`,
                url: `https://github.com/andrewkay6/machining-solutions`,
                icon: `${process.env.PUBLIC_URL}/images/github.svg`
            },
        ],
        images: [
            `${process.env.PUBLIC_URL}/images/machining-solutions1.png`,
            `${process.env.PUBLIC_URL}/images/machining-solutions2.png`,
            `${process.env.PUBLIC_URL}/images/machining-solutions3.png`,
            `${process.env.PUBLIC_URL}/images/machining-solutions4.png`,
        ]
    },
    {
        name: `Chat Stack`,
        description:
            `
        Chat Stack is a proof of concept chat application that I made using React, Javascript, and Python/Flask. 
        The database is a MariaDB/MySQL instance hosted on a Digital Ocean Droplet.
        I wanted to learn a full stack that would let me get from idea to proof of concept, quickly. 
        The app communicates with the backend using a combination of RESTful API calls and web sockets.
        The app supports login authentication and is encrypted using bcrypt.
        `,
        links: [
            {
                name: `Frontend Github`,
                url: `https://github.com/andrewkay6/chatstack-frontend`,
                icon: `${process.env.PUBLIC_URL}/images/github.svg`
            },
            {
                name: `Backend Github`,
                url: `https://github.com/andrewkay6/chatstack-backend`,
                icon: `${process.env.PUBLIC_URL}/images/github.svg`
            }
        ],
        images: [
            `${process.env.PUBLIC_URL}/images/chatstack1.png`,
            `${process.env.PUBLIC_URL}/images/chatstack2.png`,
            `${process.env.PUBLIC_URL}/images/chatstack3.png`,
            `${process.env.PUBLIC_URL}/images/chatstack4.png`,
            `${process.env.PUBLIC_URL}/images/chatstack5.png`,
        ]
    },
    {
        name: `What's my BMI?`,
        description: `
        This was my first React project. I noticed that existing BMI calculators looked outdated, and were missing a little functionality. Whenever I go on a diet, 
        I'm curious about how much weight I need to lose to get to a certain BMI. That functionality, along with a modern design, was the focus.
        `,
        links: [
            {
                name: `Live Link`,
                url: `https://andrewkay6.github.io/bmi_calculator/`,
                icon: `${process.env.PUBLIC_URL}/images/bmi-favicon.png`
            },
            {
                name: `Github`,
                url: `https://github.com/andrewkay6/bmi_calculator`,
                icon: `${process.env.PUBLIC_URL}/images/github.svg`
            }
        ],
        images: [
            `${process.env.PUBLIC_URL}/images/bmi1.png`,
            `${process.env.PUBLIC_URL}/images/bmi2.png`
        ]
    },
    {
        name: `The Grasshopper`,
        description: `
        'The Grasshopper' is a landscaping freelancer in the Hamilton area. He runs a small operation, but needed a simple website post alongside his Kijiji ads. 
        I told him I could make him a small React website to get him started. He didn't have many pictures of his work, but I think the website turned out well.
        `,
        links: [
            {
                name: `Live Link`,
                url: `https://andrewkay6.github.io/grasshopper/`,
                icon: `${process.env.PUBLIC_URL}/images/grasshopper-favicon.webp`
            },
            {
                name: `Github`,
                url: `https://github.com/andrewkay6/grasshopper`,
                icon: `${process.env.PUBLIC_URL}/images/github.svg`
            }
        ],
        images: [
            `${process.env.PUBLIC_URL}/images/grasshopper1.png`,
            `${process.env.PUBLIC_URL}/images/grasshopper2.png`,
            `${process.env.PUBLIC_URL}/images/grasshopper3.png`,
            `${process.env.PUBLIC_URL}/images/grasshopper4.png`,
        ]
    }

];


export default projects;

