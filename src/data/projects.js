import KomplexImg from "../assets/student_project_image/Komplex.webp";
import PhsarDesignImg from "../assets/student_project_image/PhsarDesign.webp";
import DomraImg from "../assets/student_project_image/Domra.webp";
import Y5Img from "../assets/student_project_image/Y-5.webp";
import ContractwiseImg from "../assets/student_project_image/Contractwise.webp";
import LifverseImg from "../assets/student_project_image/Lifverse.webp";
import Bithero6Img from "../assets/student_project_image/Bithero6.webp";
import AkharaImg from "../assets/student_project_image/Akhara.webp";
import SastraImg from "../assets/student_project_image/Sastra.webp";
import EduquestImg from "../assets/student_project_image/Eduquest.webp";
import CatagangImg from "../assets/student_project_image/Catagang.webp";
import BayCanteenImg from "../assets/student_project_image/Bay-Canteen.webp";
import Komplex1Img from "../assets/student_project_image/Komplex1.webp";
import Komplex2Img from "../assets/student_project_image/Komplex2.webp";
import Komplex3Img from "../assets/student_project_image/Komplex3.webp";
import BayCanteen1Img from "../assets/student_project_image/BayCanteen1.webp";
import BayCanteen2Img from "../assets/student_project_image/BayCanteen2.webp";
import BayCanteen3Img from "../assets/student_project_image/BayCanteen3.webp";
import BitCamoous1Img from "../assets/student_project_image/BitCampus1.webp";
import BitCamoous2Img from "../assets/student_project_image/BitCampus2.webp";
import BitCamoous3Img from "../assets/student_project_image/BitCampus3.webp";
import Catabloc1Img from "../assets/student_project_image/Catabloc1.webp";
import Catabloc2Img from "../assets/student_project_image/Catabloc2.webp";
import Catabloc3Img from "../assets/student_project_image/Catabloc3.webp";
import Domra1Img from "../assets/student_project_image/Domra1.webp";
import Domra2Img from "../assets/student_project_image/Domra2.webp";
import Domra3Img from "../assets/student_project_image/Domra3.webp";
import Phsar1Img from "../assets/student_project_image/Phsar1.webp";
import Phsar2Img from "../assets/student_project_image/Phsar2.webp";
import Phsar3Img from "../assets/student_project_image/Phsar3.webp";
import Sastra1Img from "../assets/student_project_image/Sastra1.webp";
import Sastra2Img from "../assets/student_project_image/Sastra2.webp";
import Sastra3Img from "../assets/student_project_image/Sastra3.webp";
import bayCanteenQR from "../assets/Qr_code_project/baycanteen.png";
import bitCampusQR from "../assets/Qr_code_project/bitCampus.png";
import domraQR from "../assets/Qr_code_project/domra.png";
import gataQR from "../assets/Qr_code_project/gata.png";
import komPlexQR from "../assets/Qr_code_project/komplex.png";
import phsarDesignQR from "../assets/Qr_code_project/phsarDesign.png";
import sastraQR from "../assets/Qr_code_project/sastra.png";

export const projects = [
  {
    id: 1,
    title: "KOMPLEX",
    slug: "komplex",
    projectImages: [Komplex1Img, Komplex2Img, Komplex3Img],
    qrCode: komPlexQR,
    link: "https://komplex.app/",
    problem:
      "90% of Cambodian digital artists struggle to find work due to no dedicated platform, no pricing standards, and no way to build credibility.",
    impact:
      "Provides free, high-quality STEM education to all Khmer students regardless of location or financial background.",
    achievement:
      "Delivered interactive lessons with 3D and graph tools, exercises, Tara AI tutor, forums, and video content.",
    description:
      "Education platform for Khmer students.",
    image: KomplexImg,
    article:
      "KOMPLEX is a free, collaborative educational platform built by Khmer students, for Khmer students. It brings together interactive STEM lessons featuring 3D object interactions and graph visualizations, practice exercises, AI-powered tutoring through Tara AI, community forum discussions, video content, and curated articles, all aligned with the Khmer curriculum.\n\nKOMPLEX is not just a learning tool; it is a community space where students can share experiences, celebrate achievements, and support each other's academic journeys in a way no existing platform currently offers.By providing a comprehensive, interactive, and community-driven learning environment, KOMPLEX aims to enhance STEM education accessibility and engagement for Cambodian students, empowering them to reach their full potential in the digital age."
    },

  {
    id: 2,
    title: "PHSARDESIGN",
    slug: "phsar-design",
    projectImages: [ Phsar1Img, Phsar2Img, Phsar3Img],
    qrCode: phsarDesignQR,
    link: "https://qrco.de/bgmk09",
    problem:
      " STEM resources are costly, inaccessible in rural areas, and no Khmer-language platform exists for students to learn, practice, or collaborate together.",
    impact:
      "Connects local creative talent with real clients, enabling sustainable careers in Cambodia's digital economy.",
    achievement:
      "Delivered artist profiles, service posting, client application flow, search and filter, and a rating-based credibility system.",
    description:
      "Connect with talented digital artists, designers, and creative professionals.",
    image: PhsarDesignImg,
    article:
      "PhsarDesign is an all-in-one creative marketplace built for Cambodia's growing digital economy. It connects local artists, designers, and fresh graduates with SMBs, startups, and clients who need branding, illustration, and social media design services.\n\nThe platform features artist profile pages, a client application and project posting system, a rating-based credibility system to help artists build reputation, and a smart pricing tool that recommends fair rates, ensuring both artists and clients are treated with consistency and transparency."
  },
  
  {
    id: 3,
    title: "DOMRA",
    slug: "domra",
    projectImages: [Domra1Img, Domra2Img, Domra3Img],
    qrCode: domraQR,
    link: "https://domra-tech.vercel.app/",
    problem:
      "No reliable, standardized Khmer translations exist for technical terms, causing inconsistency in academic writing and research.",
    impact:
      "Promotes Khmer in academic contexts and gives students and researchers a trusted multilingual reference.",
    achievement:
      "Delivered trilingual search, term definitions, admin panel, and community contribution system.",
    description:
      "Learn Smarter, Research Deeper",
    image: DomraImg,
    article:
      "Domra is a trilingual technical lexicon that bridges Khmer, English, and French terminology across Computer Science, Artificial Intelligence, and emerging technology fields. Built by and for the Cambodian academic community, it serves as a reliable reference tool for students, researchers, and non-technical readers who need accurate and consistent Khmer translations of technical concepts.\n\nThe platform features powerful multilingual search, term definitions with examples and references, and a community contribution system to keep the lexicon growing and up to date."
  },
  {
    id: 4,
    title: "ACET",
    slug: "acet",
    projectImages: null,
    qrCode: null,
    link: null,
    problem:
      "Students can't find conferences to join, and paper submissions get lost in email chains with no transparency or updates.",
    impact:
      "Streamlines the full research lifecycle, connecting researchers, reviewers, and organizers on one transparent platform.",
    achievement:
      "Delivered conference creation, paper submission, peer review workflow, and real-time status tracking.",
    description:
       "ACET Conference Management System",
    image: Y5Img,
    article:
      "ACET is a comprehensive Conference Management System that brings researchers, reviewers, students, lecturers, and event organizers together on a single unified platform. It replaces the fragmented combination of emails, spreadsheets, and informal communication channels that currently define academic conference workflows in Cambodia.\n\nFrom paper submission and peer review to final decisions and event announcements, ACET streamlines every step of the research dissemination process and making it faster, fairer, and fully transparent for all stakeholders involved.  "
  },
  {
    id: 5,
    title: "Contract-Generation",
    slug: "contract-generation",
    projectImages: null,
    qrCode: null,
    link: null,
    problem:
      "Schools manage lecturers through scattered Excel files, Word templates, and emails, causing errors, duplication, and poor visibility.",
    impact:
      "Centralizes lecturer administration, saving time and reducing errors across contracts, courses, and workload tracking.",
    achievement:
      "Delivered lecturer management, digital contract generation with e-signature, role-based dashboards, and course mapping.",
    description:
      "Smart contract management", 
    image: ContractwiseImg,
    article:
      "ContractWise is a web-based Lecturer Management and Contract Generation System that centralizes all aspects of academic staffing into one platform. It replaces the fragmented use of Excel, Word documents, and email chains with a unified system that handles lecturer profiles, course and class assignments, workload tracking, and automated digital contract creation.\n\nThe system supports four distinct roles  Admin, Lecturer, and Management, each with tailored dashboards and access controls to ensure the right people see and do the right things."

  },
  {
    id: 6,
    title: "FinWise",
    slug: "finewise",
    projectImages:null,
    qrCode: null,
    link: null,
    problem:
      "Only 18% of Cambodian adults are financially literate, and most people have no practical tool to track spending or stick to budgets.",
    impact:
      "Builds better money habits, reduces personal debt, and improves financial literacy across students, families, and professionals.",
    achievement:
      "Delivered expense tracker, OCR receipt scanner, budget planner, bank import, and Telegram bot integration.",
    description:
    "Smart and simple finance management",
    image: LifverseImg,
    article:
      "Finwise is a modern personal finance tracker inspired by the Japanese Kakeibo tradition of mindful household expense recording. The web application makes personal financial management simple, engaging, and educational for everyday Cambodians.\n\nIt allows users to track daily income and expenses, plan budgets, set savings goals, scan receipts using OCR, import bank transactions directly from ABA and ACLEDA, and access their finances on the go through a synchronized Telegram bot, bringing smart money management to both desktop and mobile users."  
    },
  {
    id: 7,
    title: "BitCampus",
    slug: "bitcampus",
    projectImages: [BitCamoous1Img, BitCamoous2Img, BitCamoous3Img],
    qrCode: bitCampusQR,
    link: "https://bitcampkh.vercel.app/",
    problem:
      "Beginners have no structured, approachable starting point for learning programming, existing platforms are too complex and skip the basics.",
    impact:
      "Lowers the barrier to coding education, enabling self-paced learning for students and hobbyists at any level.",
    achievement:
      "Delivered free HTML/CSS/JS courses, built-in IDE, video lessons, quizzes, and payment system.",
    description:
       "Learn programming one bit at a time",
    image: Bithero6Img,
    article:
      "BitCampus is a beginner-friendly programming learning platform built on the philosophy that learning to code should be as simple as learning the alphabet.\nThe platform offers structured lessons with clear explanations, real code examples, embedded video tutorials, and a built-in online IDE so learners can practice directly in the browser without any setup.\n\nIt is designed to serve as a confident first step for students, hobbyists, and self-learners who want to enter the world of programming at their own pace."
  },
  {
    id: 8,
    title: "KHMER DATA ANNOTATION TOOL",
    slug: "khmer-data-annotation-tool",
    projectImages:null,
    qrCode: null,
    link: null,
    problem: 
      "High-quality annotated Khmer datasets are critically lacking, and manual annotation is too slow and error-prone for researchers.",
    impact:
       "Accelerates Khmer AI and OCR research by making dataset creation faster, more accurate, and more accessible.",    
    achievement:
      "Delivered upload, region annotation, semi-automated OCR suggestions, and ground truth validation tools.",
    description:
      "Khmer text annotation tool for accorate OCR Dataset creation",
    image: AkharaImg,
    article:
      "Akhara is a specialized web-based data annotation tool built to support the creation of high-quality Khmer language datasets. Users can upload their Khmer text image datasets, draw annotation regions on text areas, and leverage semi-automated OCR suggestions to speed up the labeling process. The tool then validates annotated text against ground truth to ensure accuracy.\n\nIt is designed for data scientists, researchers, and educators who are working to advance Khmer OCR and natural language processing research in Cambodia." 
    },
  {
    id: 9,
    title: "Sastra",
    slug: "sastra",
    projectImages: [Sastra1Img, Sastra2Img, Sastra3Img],
    qrCode: sastraQR,
    link: "https://sastra-online-learning-platform.vercel.app/",
    problem:
      "Most quality online learning is in English only, excluding Khmer-speaking adults, and there is no recognized proof of self-learning in Cambodia.",
    impact:
      "Opens education access to Khmer speakers and provides verifiable credentials to support career growth.",
    achievement:
      "Delivered Khmer courses, lessons and quizzes, certificate generation, and Bakong payment integration.",
    description:
      "Online learning platform",
    image: SastraImg,
    article:
      "Sastra is a Khmer-language online learning platform that allows users to browse, purchase, and complete courses entirely in Khmer, removing the English language barrier that excludes a large portion of Cambodia's adult learners from quality online education. Upon completing a course, users earn verifiable digital certificates issued in their name, providing official recognition of their self-learning achievements.\n\nThe platform is built to serve Khmer speakers of all ages who want to grow their knowledge and career prospects on their own terms."  
  },
  {
    id: 10,
    title: "QuizKH",
    slug: "quizkh",
    projectImages: null,
    qrCode: null,
    link: null,
    problem:
      "70% of Cambodian teachers need better free quiz tools, but quality platforms like Kahoot lock key features behind expensive subscriptions.",
    impact:
      "Makes interactive, data-driven learning accessible to all educators and students without cost or technical barriers.",
    achievement:
      "Delivered live quiz hosting, PDF-to-quiz import, solo and team play modes, and Excel report exports.",
    description:
      "Free, Fast, and Interactive Quiz Platform ",
    image: EduquestImg,
    article:
      "QuizKH is a free, interactive quiz platform that transforms how quizzes are created, hosted, and analyzed for educators, students, trainers, and event organizers. Teachers can build quizzes in minutes, instantly convert PDF documents into quiz questions, host live sessions in solo or team play mode, and export detailed performance reports to Excel, all without paying for premium tools or navigating complex setups.\n\nThe platform is designed to make interactive learning accessible to everyone, anywhere in Cambodia."
    },  
    {
      id: 11,
      title: "GATABLOC",
      slug: "gatabloc",
      qrCode: gataQR,
      link: "https://www.figma.com/proto/lakxCpIoj6x2ztubrPZqTE/CATABLOC-V2?page-id=697%3A7227&node-id=697-7668&p=f&viewport=1420%2C-555%2C0.05&t=CJ12fZ2Lw6kwzFnC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=697%3A7668",
      projectImages: [Catabloc1Img, Catabloc2Img, Catabloc3Img],
      problem:
          "Learning algorithms on paper is abstract and frustrating for beginners, with no visual feedback to help them understand where their logic fails.",
      impact:
          "Makes algorithm learning visual, engaging, and stress-free, improving comprehension and motivating students to practice more.",
      achievement:
        "Delivered step-by-step visual puzzle games, student progress tracking, classroom assignment tools, and a community space.",
      description:
      " A gamified learning platform",
      image: CatagangImg,
      article:
        "CATABLOC is a gamified learning platform that teaches algorithms, loops, conditionals, and logic through visual, step-by-step interactive puzzle games, designed specifically for absolute beginners who find traditional algorithm study on paper confusing and disengaging. Students can see each step of an algorithm visualized in real time as they solve puzzles, helping them truly understand the logic rather than just memorizing steps.\n\nThe platform also includes classroom features for instructors to assign work and track student progress, as well as a community space for peer engagement and collaboration."   
      },
    {
      id: 12,
      title: "BAY-CANTEEN",
      slug: "bay-canteen", 
      qrCode: bayCanteenQR,
      link: "https://baycanteen.vercel.app/",
      projectImages: [BayCanteen1Img, BayCanteen2Img, BayCanteen3Img],   
      problem:
        "Students avoid the canteen due to repetitive, overpriced meals that don't match their preferences, with no way for the kitchen to know what students actually want.",
      impact:
        "Shifts meal planning from guesswork to student-driven data, reducing food waste and increasing canteen satisfaction.",
      achievement:
        "Delivered daily voting, menu browsing, wishlist, and feedback system.",
      description:
         "Smart voting for better canteen meals",
      image: BayCanteenImg,
      article:
        "Bay is a digital voting platform designed for CADT students, allowing them to vote daily on their preferred canteen dishes. By collecting real-time student preferences, the platform helps the canteen kitchen plan and prepare meals that students actually want to eat. Beyond voting, students can browse the menu, save favorite dishes to a wishlist, and submit feedback.\n\nThe System is connection between students and the canteen. The goal is to transform the canteen experience by ensuring fresher, tastier, and more varied meals while minimizing food waste caused by unpopular or repetitive dishes."
    }
];