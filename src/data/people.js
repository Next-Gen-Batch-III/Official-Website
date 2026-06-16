import Leangsiv from "@/assets/participants/HanLeangsiv.webp";
import Mengchhuong from "@/assets/participants/AngMengchhuong.webp";
import Sovanmonynuth from "@/assets/participants/HengSovanmonynuth.webp";
import Solita from "@/assets/participants/PunSolita.webp";
import Sreylenn from "@/assets/participants/Sreylenn.webp";
import Sindy from "@/assets/participants/Sindy.webp";
import Ponharoth from "@/assets/participants/Ponharoth.webp";
import Chanchessika from "@/assets/participants/Chanchessika.webp";

const people = [
    {
        team: "Management Team",
        people: [
            {
                name: "Han Leangsiv",
                role: ["Advisor - helps provide guidance", "Communicator - works with top management and PR Team"],
                image: Leangsiv
            },
            {
                name: "Ang Mengchhuong",
                role: ["Advisor - helps provide guidance", "Communicator - works with top management and PR Team"],
                image: Mengchhuong
            },
            {
                name: "Heng Sovanmonynuth",
                role: "Project Advisor - oversees project requirements and theme untill the pitching day",
                image: Sovanmonynuth
            },
            {
                name: "Pun Solita",
                role: "Project Co-Advisor - helps oversee project requirements and theme untill the pitching day",
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