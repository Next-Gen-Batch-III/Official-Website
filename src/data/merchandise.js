import { FaUser, FaUserFriends, FaUsers } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuPencilLine } from "react-icons/lu";
import { PiTShirt } from "react-icons/pi";
import poloShirt from "@/assets/merchandise/polo.webp";
import tshirt from "@/assets/merchandise/t_shirt.webp";

export const merchandiseItems = {
    polo: {
        id: "polo",
        slug: "polo-shirt",
        description: "A white short-sleeve polo shirt with a contrasting dark navy collar and sleeve cuffs, finished with the Next-Gen logo and multicolored lower-right design.",
        name: "Next-Gen Engagement Program – Batch III Polo Shirt",
        image: poloShirt,
        sizes: ["S", "M", "L", "XL" ],
    },
    tshirt: {
        id: "tshirt",
        slug: "t-shirt",
        description: "A comfortable white crew-neck T-shirt featuring the Next-Gen logo and a multicolored lower-right design.",
        name: "Next-Gen Engagement Program – Batch III T-Shirt",
        image: tshirt,
        sizes: ["S", "M", "L", "XL"],
    },
};

export const merchandiseOrderTypes = [
    {
        id: "standard",
        title: "Standard",
        subtitle: "Order for 1 person",
        icon: FaUser,
        items: [
            { merchandiseId: "polo", label: "Polo-Shirt", price: "$7.60" },
            { merchandiseId: "tshirt", label: "T-Shirt", price: "$4.60" },
        ],
    },
    {
        id: "couple",
        title: "Couple",
        subtitle: "Order for 2 people",
        icon: FaUserFriends,
        items: [
            { merchandiseId: "polo", label: "(2) Polo-Shirts", price: "$13.96" },
            { merchandiseId: "tshirt", label: "(2) T-Shirts", price: "$7.96" },
            { merchandiseId: "polo", label: "Polo + T-Shirt", price: "$10.96" },
        ],
    },
    {
        id: "group",
        title: "Group",
        subtitle: "Order for 4 or more people",
        icon: FaUsers,
        items: [
            { merchandiseId: "polo", label: "Polo-Shirt", price: "$6.69 (Each)" },
            { merchandiseId: "tshirt", label: "T-Shirt", price: "$3.69 (Each)" },
        ],
        groupOrder: {
            minimumQuantity: 4,
            garmentTypes: ["Polo-Shirt", "T-Shirt"],
        },
    },
];

export const coupleChoices = [
    { id: "polo-tshirt", label: "1 Polo-Shirt + 1 T-Shirt", productIds: ["polo", "tshirt"], price: "$10.96" },
    { id: "two-polos", label: "2 Polo-Shirts", productIds: ["polo", "polo"], price: "$13.96" },
    { id: "two-tshirts", label: "2 T-Shirts", productIds: ["tshirt", "tshirt"], price: "$7.96" },
];

export const merchandiseFeatures = [
    { title: "Premium Quality", icon: PiTShirt },
    { title: "Personalized", icon: LuPencilLine },
    { title: "Group Order", icon: HiOutlineUserGroup },
];

export const merchandiseHero = {
    primaryImage: poloShirt,
    secondaryImage: tshirt,
};

export const merchandiseSizeChart = [
    { size: "S", weight: "42-55 kg" },
    { size: "M", weight: "56-65 kg" },
    { size: "L", weight: "66-75 kg" },
    { size: "XL", weight: "76-85 kg" },
    { size: "XXL", weight: "86-100 kg" },
    { size: "XXXL", weight: "101-115 kg" },
];

export const merchandiseSleeveCustomization = {
    defaultValue: {
        left: { option: "name", text: "NGEP" },
        right: "trainer",
    },
    leftOptions: [
        { value: "blank", label: "No Customization", detail: "(Blank)" },
        { value: "name", label: "Add My Name" },
    ],
    rightOptions: [
        { value: "program", label: "Next-Gen Engagement Program - Batch III" },
        { value: "trainer", label: "Trainer" },
        { value: "trainee", label: "Trainee" },
        { value: "blank", label: "No Customization", detail: "(Blank)" },
    ],
};
