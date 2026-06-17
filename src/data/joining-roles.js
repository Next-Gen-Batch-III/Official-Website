import bookIcon from '../assets/icon_image/book.png';
import diagramIcon from '../assets/icon_image/diagram.png';
import userIcon from '../assets/icon_image/user.png';


export const positions = [
    {
        id: 1,
        title: "Trainer",
        role: "trainer",

        items: [  
            {
                icon: bookIcon,
                head: "Create Courses",
                desc: "Design structured lessons for learners."
            },
            {
                icon: diagramIcon,
                head: "Explain Concepts",
                desc: "Break down complex ideas visually."
            },
            {
                icon: userIcon,
                head: "Build Community",
                desc: "Connect with learners."
            }
        ],

        detail: {
            head: "Share Your Knowledge",
            desc: "Teach what you love and help learners gain practical skills."
        }
    },

    //{
    //    id: 2,
    //    title: "Student",
    //    role: "university_student",

    //    items: [
    //        {
    //            icon: ,
    //            head: "Learn Skills",
    //            desc: "Build real-world knowledge."
    //        },
    //        {
    //            icon: ,
    //            head: "Learn Skills",
    //            desc: "Build real-world knowledge."
    //        },
    //        {
    //            icon: ,
    //            head: "Learn Skills",
    //            desc: "Build real-world knowledge."
    //        },
    //    ],

    //    detail: {
    //        head: "Grow Professionally",
    //        desc: "Enhance your profile and career opportunities."
    //    }
    //},

    //{
    //    id: 3,
    //    title: "Mentor",
    //    role: "highschool_student",

    //    items: [
    //        {
    //            icon: ,
    //            head: "Guide Students",
    //            desc: "Support the next generation."
    //        },
    //        {
    //            icon: ,
    //            head: "Guide Students",
    //            desc: "Support the next generation."
    //        },
    //        {
    //            icon: ,
    //            head: "Guide Students",
    //            desc: "Support the next generation."
    //        },
    //    ],

    //    detail: {
    //        head: "Inspire The Future",
    //        desc: "Mentor and motivate young talent."
    //    }
    //}
];