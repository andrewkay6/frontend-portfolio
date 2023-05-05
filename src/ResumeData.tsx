

export interface ResumeDataItem {
    title: string;
    subtitle: string;
    description: string[] | string;
    summary?: string[] | string;
    image: string;
}

const resumeData = [
    {
        "name": "Education",
        "items": [
            {
                "title": "McMaster University",
                "subtitle": "Bachelor of Applied Science - BASc, Computer Science",
                "description": [
                    "Sep 2018 - Apr 2024"
                ],
                "summary": [   
                    "Data Structures And Algorithms",
                    "Databases",
                    "Software Requirements And Security Considerations",
                    "Principles Of Programming",
                    "Introduction To Software Development",
                    "Concurrent Systems"
                ],

                "image": "https://media.licdn.com/dms/image/C4E0BAQEKhP8rfTkMbA/company-logo_200_200/0/1670513488483?e=1691020800&v=beta&t=ZoLr6o_anQKHkY6t7mFP04711o9UyvNwTVWKbvExG18"
            }
        ]
    },
    {
        "name": "Experience",
        "items": [
            {
                "title": "Technical Consultant / Software Developer",
                "subtitle": "CONTAX Inc.",
                "description": [
                    "May 2022 - Sep 2023",
                    "1 year, 4 months",
                ],
                "summary": [
                    "Met with clients to discuss technical / software requirements.",
                    "Designed, implemented and presented client deliverables. ",
                    "Participated in sprints for front-end and back-end development. ",
                    "Created bash scripts to automate tasks for team members.",
                    "Contributed new features to internal software for parsing and mapping invoices.",
                    "Created data models for BI reports."

                ],
                
                "image": "https://media.licdn.com/dms/image/C560BAQFBgQbF53FikA/company-logo_200_200/0/1523901232554?e=1691020800&v=beta&t=pT5DWJdEsJI-EbZO4NAP_NXBL9AduTuUG5siaK5DZ6g"
            }
        ]
    }


]

export default resumeData;