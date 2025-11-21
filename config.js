import { FaDiscord, FaGithub, FaMapPin, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase, HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

export const config = {
    developer: {
        name: "Abool Jaya Muhris",
        profileImage: "/profile-main.jpg",
    },
    social: {
        github: "MUHRIS-AJ",
        linkedin: "abool-jaya-muhris-975220350",
        linkedinUrl: "https://www.linkedin.com/in/abool-jaya-muhris-975220350/",
        instagram: "hum_x_nur",
        instagramUrl: "https://www.instagram.com/hum_x_nur/",
        whatsapp: "+94 77 5551 712",
        whatsappUrl: "https://wa.me/94775551712"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    // Optional curated projects for the /projects page
    projects: [],
    recentTracks: false, // Enable/disable Spotify recent tracks
    skills: [
        {
            title: "Technical Skills",
            icon: <HiCode />,
            description: "Core development stack",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-400",
            skills: [
                { name: "Python", level: "Advanced", hot: true },
                { name: "JavaScript", level: "Advanced", hot: true },
                { name: "React & Next.js", level: "Advanced" },
                { name: "Tailwind CSS", level: "Advanced" },
                { name: "Node.js & Express", level: "Intermediate" },
                { name: "REST APIs", level: "Intermediate" },
                { name: "SQL/MySQL", level: "Intermediate" },
                { name: "Git & GitHub", level: "Advanced" }
            ]
        },
        {
            title: "Hard Skills",
            icon: <HiBadgeCheck />,
            description: "Data and engineering capabilities",
            bgClass: "bg-indigo-500/10",
            iconClass: "text-indigo-400",
            skills: [
                { name: "Data Analysis", level: "Advanced", hot: true },
                { name: "Machine Learning", level: "Intermediate", hot: true },
                { name: "Model Deployment", level: "Intermediate" },
                { name: "ETL & Data Cleaning", level: "Intermediate" },
                { name: "Pandas & NumPy", level: "Advanced" },
                { name: "Jupyter Notebooks", level: "Advanced" },
                { name: "Docker", level: "Intermediate" },
                { name: "Automated Testing", level: "Intermediate" }
            ]
        }
    ],
    education: [
        {
            institution: "Carmel Fatima College, KalmunaI",
            degree: "Grade 1-13",
            period: "Jan 2006 - Dec 2024",
            location: "KalmunaI, Sri Lanka",
            description: "A fast learner with a good performance in studies, class topper",
            achievements: [
                "A/L Examination in Technology: C3",
                "Z-Score: 1.0098",
                "O/L Examination: 3A4B2C",
                "Activities: GOOD STUDENT, BEST STUDENT"
            ],
            grade: "Class Topper"
        },
        {
            institution: "University of Colombo",
            degree: "Python Programming",
            period: "Aug 2025 - Sep 2025",
            location: "Colombo, Sri Lanka",
            description: "Comprehensive Python programming course covering fundamentals and advanced topics",
            skills: ["MySQL", "Python", "Object-Oriented Programming (OOP)", "NumPy", "Pandas", "Graphical User Interface (GUI)"]
        },
        {
            institution: "Eastern University Sri Lanka",
            degree: "Bachelor's degree, Information Communication Technology",
            period: "2024 - Present",
            location: "Sri Lanka",
            description: "Currently pursuing Bachelor's degree in ICT",
            grade: "Just Selected"
        },
        {
            institution: "British Council",
            degree: "BC English (B1)",
            period: "Feb 2025 - Aug 2026",
            location: "Sri Lanka",
            description: "English language proficiency certification",
            grade: "B1",
            skills: ["Speaking", "Listening", "Reading", "Writing"]
        }
    ],
    certifications: [
        {
            title: "PYTHON FUNDAMENTALS",
            issuer: "University of Colombo School of Computing",
            issuedDate: "Oct 2025",
            credentialId: "CSC/PF/2025/GR_03/016",
            skills: ["Python (Programming Language)", "NumPy", "pandas", "MySQLi"]
        },
        {
            title: "Problems, Algorithms and Flowcharts",
            issuer: "IBM",
            issuedDate: "Oct 2025",
            credentialId: "FRWLXZW4SGB9",
            skills: ["Program Development", "Computational Thinking", "Algorithms", "Computer Science", "Pseudocode", "Data Structures"]
        },
        {
            title: "Tools for Data Science",
            issuer: "IBM",
            issuedDate: "Sep 2025",
            credentialId: "DIVCBPNU7C9N",
            skills: ["Data Science", "Python", "Github", "IBM Cloud", "Version Control", "Git", "Query Languages", "Machine Learning", "Jupyter", "Open Source Technology"]
        },
        {
            title: "The Data Science Profession – Student View",
            issuer: "IBM",
            issuedDate: "Apr 2025",
            credentialId: "D9OVHFOVNQB8",
            skills: ["Applied Machine Learning", "Data Science", "Machine Learning Algorithms", "Python", "Unsupervised Learning", "Machine Learning"]
        }
    ],
    experiences: [],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@MUHRIS-AJ",
            link: `https://github.com/MUHRIS-AJ`
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Abool Jaya Muhris",
            link: "https://www.linkedin.com/in/abool-jaya-muhris-975220350/"
        },
        {
            icon: <FaInstagram className="w-5 h-5" />,
            label: "Instagram",
            value: "@hum_x_nur",
            link: "https://www.instagram.com/hum_x_nur/"
        },
        {
            icon: <FaWhatsapp className="w-5 h-5" />,
            label: "WhatsApp",
            value: "+94 77 5551 712",
            link: "https://wa.me/94775551712"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Sri Lanka",
            link: null
        }
    ]
}
