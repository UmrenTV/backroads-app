import tourOne from "./images/tour-1.jpeg";
import tourTwo from "./images/tour-2.jpeg";
import tourThree from "./images/tour-3.jpeg";
import tourFour from "./images/tour-4.jpeg";

export const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
    { id: 1, href: "https://www.x.com", icon: "fab fa-twitter" },
    { id: 2, href: "https://www.facebook.com", icon: "fab fa-facebook" },
    { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
    { id: 4, href: "https://www.linkedin.com", icon: "fab fa-linkedin" },
];

export const services = [
    {
        id: 1,
        icon: "fas fa-wallet fa-fw",
        title: "saving money",
        text: "Our tours are affordable for all.",
    },
    {
        id: 2,
        icon: "fas fa-tree fa-fw",
        title: "endless hiking",
        text: "Go where no man has gone before.",
    },
    {
        id: 3,
        icon: "fas fa-socks fa-fw",
        title: "amazing comfort",
        text: "The best comfort is guaranteed.",
    },
];

export const tours = [
    {
        id: 1,
        image: tourOne,
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        description:
            "Voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        country: "china",
        duration: "6 days",
        price: "from $2100",
    },
    {
        id: 2,
        image: tourTwo,
        date: "october 1st, 2020",
        title: "best of java",
        description:
            "Voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        country: "indonesia",
        duration: "11 days",
        price: "from $1400",
    },
    {
        id: 3,
        image: tourThree,
        date: "september 15th, 2020",
        title: "explore hong kong",
        description:
            "Voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        country: "hong kong",
        duration: "8 days",
        price: "from $5000",
    },
    {
        id: 4,
        image: tourFour,
        date: "december 5th, 2020",
        title: "kenya highlights",
        description:
            "Voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        country: "kenya",
        duration: "20 days",
        price: "from $3300",
    },
];
