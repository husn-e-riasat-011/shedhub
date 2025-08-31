import { FaStar } from "react-icons/fa";
import "@fontsource/poppins";
import { useState } from "react";
export default function Sheds() {
  const [visibleCount, setVisibleCount] = useState(12);
  const sheds = [
    {
      id: 1,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 2,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 3,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 4,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 5,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 6,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 7,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 8,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 9,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 10,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 11,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 12,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 13,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 14,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 15,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 16,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 17,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 18,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 19,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 20,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 21,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 22,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 23,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 24,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 25,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 26,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 27,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 28,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 29,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 30,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 31,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 32,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 33,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 34,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 35,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 36,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 37,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 38,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 39,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 40,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 41,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 42,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 43,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 44,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 45,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 46,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 47,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 48,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 49,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 50,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 51,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 52,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 53,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 54,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 55,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 56,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 57,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 58,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 59,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 60,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 61,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 62,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 63,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 64,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 65,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 66,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 67,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 68,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 69,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 70,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 71,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 72,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 73,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 74,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 75,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 76,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 77,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 78,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 79,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 80,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 81,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 82,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 83,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 84,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 85,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 86,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 87,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 88,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 89,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 90,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 91,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 92,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 93,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 94,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 95,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 96,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 97,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 98,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 99,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 100,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
  ];
  const visibleSellers = sheds.slice(0, visibleCount);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1538px] px-6 mx-auto bg-[#F7F7F7]">
      {visibleSellers.map((shed, i) => (
        <div
          key={i}
          className="bg-white rounded-[13px] border-[1.5px] border-[#002D4A] hover:border-[#FFA424] hover:shadow-lg transition duration-300 overflow-hidde cursor-pointer"
        >
          {/* Image + Badges */}
          <div className="relative">
            <img
              src={shed.image}
              alt={shed.title}
              className="w-full h-48 object-cover border-[#002D4A] rounded-t-[11px]"
            />
            {/* Heart Icon at bottom-right */}
            <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer">
              <svg
                width="17"
                height="17"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.6391 2.67663C8.03958 0.841744 5.37234 0.348162 3.36829 2.02837C1.36424 3.70858 1.08211 6.51783 2.65589 8.505C3.96439 10.1572 7.92435 13.6419 9.22222 14.7697C9.36742 14.8959 9.44006 14.9589 9.5247 14.9837C9.59862 15.0054 9.6795 15.0054 9.75342 14.9837C9.83806 14.9589 9.9107 14.8959 10.0559 14.7697C11.3537 13.6419 15.3137 10.1572 16.6222 8.505C18.196 6.51783 17.9483 3.69091 15.9098 2.02837C13.8713 0.36584 11.2385 0.841744 9.6391 2.67663Z"
                  stroke="#FFA424"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {shed.featured && (
              <span className="absolute top-2 right-2 bg-white text-black font-poppins font-medium text-[13px] leading-[100%] tracking-[0em] p-2 rounded-full flex items-center gap-1">
                <FaStar className="text-[#FFA424] text-[12px]" />
                FEATURED
              </span>
            )}
            <span className="absolute bottom-2 left-2 flex items-center gap-2 bg-[#FFFFFF] text-[#002D4A] font-poppins font-semibold text-[12px] leading-[100%] tracking-[-0.03em] px-2 py-1 rounded-full">
              <span className="w-2 h-2 bg-[#02db40] rounded-full"></span>
              Status Available
            </span>
          </div>

          {/* Content */}
          <div className="py-4 px-2">
            <h3 className="font-semibold text-lg text-[#002D4A]">
              {shed.title}
            </h3>
            <p className="text-[#002D4A] text-sm">{shed.subtitle}</p>

            <div className="mt-2 text-sm  flex">
              <div>
                <img
                  src="/shed cicle.PNG"
                  alt="Dealer"
                  className=" w-12 h-12   rounded-full object-cover bg-center bg-no-repeat"
                />
              </div>
              <div className="ml-1">
                <p className="text-[#002D4A]">{shed.company}</p>
                <p className="flex items-center gap-1 text-[#878B96]">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 21 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 14.0625C12.4676 14.0625 14.0625 12.4676 14.0625 10.5C14.0625 8.53249 12.4676 6.9375 10.5 6.9375C8.53243 6.9375 6.9375 8.53249 6.9375 10.5C6.9375 12.4676 8.53243 14.0625 10.5 14.0625Z"
                      stroke="#878B96"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 24.75C15.25 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.75 20 10.5 24.75Z"
                      stroke="#878B96"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {shed.location}
                </p>
              </div>
            </div>

            {/* Price */}
            <p className="text-[#FFA424] font-bold mt-4">
              {shed.price}{" "}
              <span className="text-[#FFA424] font-normal">+ Taxes</span>
            </p>

            {/* Button */}
            <button className="mt-3 w-full bg-[#FFA424] text-[#FFFFFF] py-2 rounded-[9px] hover:bg-orange-500 transition">
              Contact Seller
            </button>
          </div>
        </div>
      ))}

      {visibleCount < sheds.length && (
        <div className="flex justify-center items-center my-10 mx-auto">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="group flex items-center border border-[#002D4A] rounded-[35px] gap-2
    transition-all duration-300 hover:bg-[#002D4A] active:scale-95 px-[23px] py-[17px]"
          >
            {/* Text */}
            <span
              className="text-[#002D4A] font-medium text-[20px] tracking-normal leading-[100%] 
      transition-colors duration-300 group-hover:text-white"
            >
              LOAD MORE
            </span>

            {/* Icon */}
            <span className="pt-[3.5px] flex items-center justify-center">
              <svg
                className="transition-colors duration-300 text-[#002D4A] group-hover:text-white"
                width="11"
                height="8"
                viewBox="0 0 13 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6.5 7L12 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
