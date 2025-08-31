import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useState } from "react";
export default function AllDealers() {
  const [visibleCount, setVisibleCount] = useState(12);

  const sellers = [
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
  ];
  const visibleSellers = sellers.slice(0, visibleCount);

  return (
    <>
      <Navbar />
      <div className=" max-w-[2560px] bg-[#F7F7F7]">
        {/* Header */}
        <div className="max-w-[1538px] mx-auto my-auto pt-10 px-6">
          <div className="flex justify-between ">
            <div>
              <div className="flex items-center gap-2">
                {/* star svg */}
                <svg
                  width="25.81px"
                  height="23.65px"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9208 1.28763C12.2361 0.67307 12.394 0.365788 12.6081 0.267616C12.7944 0.182198 13.0109 0.182198 13.1972 0.267616C13.4115 0.365788 13.5691 0.67307 13.8847 1.28763L16.878 7.11815C16.9711 7.29958 17.0176 7.3903 17.0856 7.46073C17.146 7.52309 17.2183 7.57363 17.2985 7.60952C17.3892 7.65006 17.4933 7.66469 17.7015 7.69395L24.397 8.63491C25.1021 8.734 25.4546 8.78354 25.6178 8.94911C25.7597 9.09318 25.8264 9.29113 25.7994 9.48787C25.7684 9.71398 25.5132 9.95296 25.0027 10.431L20.1596 14.9666C20.0087 15.1079 19.9331 15.1786 19.8844 15.2627C19.8413 15.3372 19.8136 15.4191 19.803 15.5037C19.7909 15.5992 19.8087 15.699 19.8443 15.8988L20.9872 22.305C21.1076 22.9806 21.1679 23.3185 21.0547 23.5191C20.9561 23.6935 20.781 23.8157 20.578 23.8519C20.3446 23.8935 20.0291 23.734 19.3981 23.415L13.4124 20.3883C13.2258 20.294 13.1326 20.2468 13.0343 20.2283C12.9474 20.212 12.8579 20.212 12.771 20.2283C12.6727 20.2468 12.5795 20.294 12.393 20.3883L6.40726 23.415C5.77621 23.734 5.46067 23.8935 5.22736 23.8519C5.02437 23.8157 4.84921 23.6935 4.75068 23.5191C4.63742 23.3185 4.69769 22.9806 4.81821 22.305L5.96096 15.8988C5.99658 15.699 6.0144 15.5992 6.00234 15.5037C5.99167 15.4191 5.964 15.3372 5.92088 15.2627C5.87217 15.1786 5.79669 15.1079 5.64571 14.9666L0.802619 10.431C0.292168 9.95296 0.0369429 9.71398 0.00589693 9.48787C-0.0211245 9.29113 0.0456215 9.09318 0.187573 8.94911C0.350728 8.78354 0.703253 8.734 1.40832 8.63491L8.10382 7.69395C8.31204 7.66469 8.41615 7.65006 8.50683 7.60952C8.5871 7.57363 8.65937 7.52309 8.71964 7.46073C8.7877 7.3903 8.83427 7.29958 8.92741 7.11815L11.9208 1.28763Z"
                    fill="#FFA424"
                  />
                </svg>

                <h1
                  class="font-poppins font-semibold text-[39px] leading-[100%] tracking-[-0.01em] text-[#002D4A]
         lg:text-[32px] lg:leading-[110%] lg:tracking-[-0.02em]
         md:text-[28px] md:leading-[115%] md:tracking-[-0.01em]
         sm:text-[24px] sm:leading-[120%] sm:tracking-normal"
                >
                  FEATURED SHED SELLERS
                </h1>
              </div>
              <p
                className="mt-2 font-poppins font-normal  text-[#002D4A]
   text-[21px] leading-[100%] tracking-[-0.03em] 
   md:text-[16px] 
   lg:text-[18px] 
   xl:text-[21px]
"
              >
                Find nearby sellers and brands listed on ShedHub.
              </p>
            </div>
            {/* Search Bar */}
            <div className="flex items-center border border-[#FFA424] rounded-[35px] px-3 sm:px-4 w-full max-w-[760px]">
              <input
                type="text"
                placeholder="SEARCH DEALER WITH LOCATION OR ZIP"
                className="flex-grow bg-transparent outline-none placeholder:text-[#FFA424] font-poppins font-normal not-italic uppercase
      text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]
      h-[38px] sm:h-[42px] md:h-[46px] lg:h-[50px] xl:h-[52px]"
              />

              {/* Divider - hidden on very small screens */}
              <div className="hidden sm:block h-8 sm:h-10 w-px bg-[#FFA424] mx-2 sm:mx-3"></div>

              {/* Search Button */}
              <button
                type="button"
                onClick={() => alert("Search triggered!")}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.0825 22L18.0153 17.9167M20.9204 10.9167C20.9204 16.3935 16.498 20.8333 11.0427 20.8333C5.58743 20.8333 1.16504 16.3935 1.16504 10.9167C1.16504 5.43984 5.58743 1 11.0427 1C16.498 1 20.9204 5.43984 20.9204 10.9167Z"
                    stroke="#FFA424"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <span className="text-sm font-medium whitespace-nowrap">
              455 Dealers Found
            </span>
            <div className="text-sm">
              Sort by: <span className="font-semibold">Nearest Dealer</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {visibleSellers.map((seller, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center"
              >
                {/* Yoder Logo */}
                <div className="mb-4">
                  <svg
                    width="116"
                    height="123"
                    viewBox="0 0 116 123"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.573242"
                      y="0.25"
                      width="114.901"
                      height="121.864"
                      rx="6.75"
                      fill="black"
                      stroke="#002D4A"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">{seller.name}</h3>
                <p className="text-sm text-gray-500">
                  {seller.memberSince}
                  {/* tick svg */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33771 9.67064L9.02893 11.3619L12.8342 7.55661..."
                      stroke="#FFA424"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>

                {/* Contact Info */}
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    {/* link svg */}
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M1.64844 9.334H17.6037..."
                        stroke="#FFA424"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{seller.website}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* email svg */}
                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none">
                      <path
                        d="M1.64844 3.56128L8.1621 8.0905..."
                        stroke="#FFA424"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{seller.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* location svg */}
                    <svg width="17" height="21" viewBox="0 0 17 21" fill="none">
                      <path
                        d="M8.52148 19.4372C11.958..."
                        stroke="#FFA424"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{seller.address}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="w-full mt-6 flex flex-col gap-2">
                  <button className="bg-[#FFA424] text-white font-semibold py-2 rounded-lg">
                    Contact Seller
                  </button>
                  <button className="border border-[#FFA424] text-[#002D4A] font-medium py-2 rounded-lg">
                    Listings From Seller
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Load More Button */}
        {visibleCount < sellers.length && (
          <div className="flex justify-center items-center my-10">
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

      <Footer />
    </>
  );
}
