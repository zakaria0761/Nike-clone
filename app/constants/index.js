import {
  Facebook,
  Instagram,
  ShieldTick,
  Support,
  TruckFast,
  Twitter,
} from "../assetsComponents/icons";
import {
  BigShoe1,
  BigShoe2,
  BigShoe3,
  Customer1,
  Customer2,
  Shoe4,
  Shoe5,
  Shoe6,
  Shoe7,
  ThumbnailShoe1,
  ThumbnailShoe2,
  ThumbnailShoe3,
} from "../assetsComponents/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: (
      <ThumbnailShoe1
        width={127}
        height={103}
        className="object-contain absolute z-10"
      />
    ),
    bigShoe: BigShoe1,
  },
  {
    thumbnail: (
      <ThumbnailShoe2
        width={127}
        height={103}
        className="object-contain absolute z-10"
      />
    ),
    bigShoe: BigShoe2,
  },
  {
    thumbnail: (
      <ThumbnailShoe3
        width={127}
        height={103}
        className="object-contain absolute z-10"
      />
    ),
    bigShoe: BigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: <Shoe4 className="w-[280px] h-[280px]" />,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: <Shoe5 className="w-[280px] h-[280px]" />,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: <Shoe6 className="w-[280px] h-[280px]" />,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: <Shoe7 className="w-[280px] h-[280px]" />,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: <TruckFast width={24} height={24} />,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: <ShieldTick width={24} height={24} />,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: <Support width={24} height={24} />,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: Customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: Customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: <Facebook width={24} height={24} alt="facebook logo" /> },
  { src: <Twitter width={20} height={24} alt="twitter logo" /> },
  { src: <Instagram width={24} height={24} alt="instagram logo" /> },
];
