import Leangsiv from "@/assets/participants/hanLeangsiv.webp";
import Mengchhuong from "@/assets/participants/angMengchhuong.webp";
import Sovanmonynuth from "@/assets/participants/hengSovanmonynuth.webp";
import Solita from "@/assets/participants/punSolita.webp";
import Sreylenn from "@/assets/participants/sreylenn.webp";
import Sindy from "@/assets/participants/sindy.webp";
import Ponharoth from "@/assets/participants/ponharoth.webp";
import Chanchessika from "@/assets/participants/chanchessika.webp";

const people = [
    {
        team: "Management Team",
        people: [
            {
                name: "Han Leangsiv",
                role: ["Program Coordinator", "Lecturer-Researcher"],
                image: Leangsiv
            },
            {
                name: "Ang Mengchhuong",
                role: ["Program Coordinator", "Lecturer-Researcher"],
                image: Mengchhuong
            },
            {
                name: "Heng Sovanmonynuth",
                role: "Innovation Program Coordinator",
                image: Sovanmonynuth
            },
            {
                name: "Pun Solita",
                role: "Assistant Lecturer-Researcher",
                image: Solita
            }
        ],
        link: "/people/management"
    },
    {
        team: "Organizer Team",
        people: [
            {
                name: "Seat Sreylenn",
                role: "Next-Gen Program Head",
                image: Sreylenn
            },
            {
                name: "Hong Sindy",
                role: "Event Head",
                image: Sindy
            },
            {
                name: "Nin Ponharoth",
                role: "Project Head",
                image: Ponharoth
            },
            {
                name: "Kue Chanchessika",
                role: "Trainer Head",
                image: Chanchessika
            }
        ],
        link: "/people/organizers"
    }
]

export { people };