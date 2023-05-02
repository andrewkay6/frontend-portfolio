

export interface ResumeDataItem {
    title: string;
    subtitle: string;
    description: string[] | string;
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
                "description": ["May 2022 - Aug 2023", ],
                "image": "https://media.licdn.com/dms/image/C560BAQFBgQbF53FikA/company-logo_200_200/0/1523901232554?e=1691020800&v=beta&t=pT5DWJdEsJI-EbZO4NAP_NXBL9AduTuUG5siaK5DZ6g"
            }
        ]
    }


]

export default resumeData;