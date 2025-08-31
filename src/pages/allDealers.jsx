import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useState } from "react";
export default function AllDealers() {
  const [visibleCount, setVisibleCount] = useState(12);

  const sellers = [
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
  ];
  const visibleSellers = sellers.slice(0, visibleCount);

  return (
    <>
      <Navbar />
      <div className=" max-w-[2560px] mx-auto bg-[#F7F7F7]">
        {/* Header */}
        <div className="max-w-[1538px] mx-auto my-auto pt-10 px-6">
          <div className="flex flex-wrap justify-between items-center ">
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
                  className="font-poppins font-semibold text-[28px] sm:text-[36px] md:text-[40px] leading-[100%] tracking-[-0.01em] text-[#002D4A]
          lg:leading-[110%] lg:tracking-[-0.02em]
         md:leading-[115%] md:tracking-[-0.01em]
         sm:leading-[120%] sm:tracking-normal"
                >
                  FEATURED SHED SELLERS
                </h1>
              </div>
              <p
                className="mt-2 font-poppins font-normal  text-[#002D4A]
   text-[20px] leading-[100%] tracking-[-0.03em] 
   md:text-[16px] 
   lg:text-[18px] 
   xl:text-[21px]
"
              >
                Find nearby sellers and brands listed on ShedHub.
              </p>
            </div>
            {/* Search Bar */}
            <div className="flex items-center border border-[#FFA424] rounded-[35px] px-3 sm:px-4 lg:mt-0 mt-4 md:mb-0 mb-4   w-full max-w-[760px] max-h-[65px] h-full bg-white ">
              <input
                type="text"
                placeholder="SEARCH DEALER WITH LOCATION OR ZIP"
                className="flex-grow bg-transparent outline-none placeholder:text-[#FFA424] font-poppins font-normal not-italic uppercase
      text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]
      h-[38px] sm:h-[42px] md:h-[40px] "
              />

              <div className="hidden sm:block h-[30px] w-px bg-[#FFA424] mx-3"></div>

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
          <div className=" justify-between items-center max-w-[1538px] mx-auto  mb-6 hidden md:flex bg-white p-4 rounded-lg mt-10">
            {/* Left Heading */}
            <h1 className="font-poppins font-normal text-[17px] leading-[100%] tracking-[0%] text-[#9C9CA3]">
              <span className="font-poppins font-semibold text-black text-[17px] leading-[100%] tracking-[0%]">
                455
              </span>{" "}
              Sheds Found
            </h1>

            {/* Right View Section */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <div className="flex justify-center items-center gap-4 font-poppins font-semibold text-[14px] leading-[100%] tracking-[0%]">
                Newest Listing{" "}
                <svg
                  width="6"
                  height="5"
                  viewBox="0 0 6 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.86603 4.5C3.48112 5.16667 2.51887 5.16667 2.13397 4.5L0.401924 1.5C0.0170235 0.833332 0.498149 -5.6841e-07 1.26795 -5.01112e-07L4.73205 -1.9827e-07C5.50185 -1.30972e-07 5.98298 0.833333 5.59808 1.5L3.86603 4.5Z"
                    fill="#9C9CA3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-28 md:mt-28 mt-20 ">
            {visibleSellers.map((seller, i) => (
              <div
                key={i}
                className="relative bg-white shadow rounded-xl px-3 py-6 flex flex-col items-center text-center max-w-[496px]"
              >
                {/* Yoder Logo */}
                <div className="mb-4 absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <img
                    src="/alldealersimg.PNG" // yahan apna image path do (public folder me hona chahiye)
                    alt="icon"
                    width={116}
                    height={123}
                    className="rounded-md"
                  />
                </div>

                <div className="mt-12 w-full">
                  <div className="flex items-center justify-center  gap-1">
                    <h3 className="font-poppins font-semibold  text-[18px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                      {seller.name}
                    </h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1"
                    >
                      <path
                        d="M7.33771 9.67064L9.02893 11.3619L12.8342 7.55661M5.92874 2.75246C6.60846 2.69821 7.25375 2.43093 7.77275 1.98864C8.98386 0.956523 10.7652 0.956523 11.9763 1.98864C12.4953 2.43093 13.1406 2.69821 13.8203 2.75246C15.4066 2.87904 16.6661 4.13861 16.7927 5.72483C16.847 6.40456 17.1142 7.04985 17.5566 7.56885C18.5886 8.77996 18.5886 10.5613 17.5566 11.7724C17.1142 12.2914 16.847 12.9367 16.7927 13.6164C16.6661 15.2027 15.4066 16.4622 13.8203 16.5888C13.1406 16.6431 12.4953 16.9103 11.9763 17.3526C10.7652 18.3847 8.98386 18.3847 7.77275 17.3526C7.25375 16.9103 6.60846 16.6431 5.92874 16.5888C4.34252 16.4622 3.08294 15.2027 2.95636 13.6164C2.90212 12.9367 2.63483 12.2914 2.19254 11.7724C1.16043 10.5613 1.16043 8.77996 2.19254 7.56885C2.63483 7.04985 2.90212 6.40456 2.95636 5.72483C3.08294 4.13861 4.34252 2.87904 5.92874 2.75246Z"
                        stroke="#FFA424"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="font-poppins font-normal text-[14px] leading-[100%] tracking-[-0.03em] text-center text-[#002D4A] mt-2">
                    {seller.memberSince}
                  </p>

                  {/* Contact Info */}
                  <div className="mt-6 space-y-3 text-[#002D4A] text-sm">
                    <div className="flex items-center justify-center gap-1">
                      <svg
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16px] h-[16px] md:h-[20px] md:w-[20px]"
                      >
                        <path
                          d="M1.64844 9.334H17.6037M1.64844 9.334C1.64844 13.8857 5.22015 17.5756 9.62608 17.5756M1.64844 9.334C1.64844 4.7823 5.22015 1.09241 9.62608 1.09241M17.6037 9.334C17.6037 13.8857 14.032 17.5756 9.62608 17.5756M17.6037 9.334C17.6037 4.7823 14.032 1.09241 9.62608 1.09241M9.62608 17.5756C11.6215 15.3187 12.7556 12.39 12.8171 9.334C12.7556 6.27804 11.6215 3.34925 9.62608 1.09241M9.62608 17.5756C7.63065 15.3187 6.49665 12.39 6.43502 9.334C6.49665 6.27804 7.63065 3.34925 9.62608 1.09241"
                          stroke="#FFA424"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="font-poppins font-normal text-[17px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                        {seller.website}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      {/* email svg */}
                      <svg
                        className="w-[16px] h-[16px] md:h-[20px] md:w-[20px]"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.64844 3.56128L8.1621 8.0905C8.68959 8.45733 8.95333 8.64071 9.2402 8.71171C9.49357 8.77448 9.75859 8.77448 10.012 8.71171C10.2988 8.64071 10.5626 8.45733 11.0901 8.0905L17.6037 3.56128M5.47771 13.8633H13.7745C15.1149 13.8633 15.785 13.8633 16.297 13.6041C16.7473 13.3762 17.1134 13.0126 17.3429 12.5652C17.6037 12.0566 17.6037 11.3909 17.6037 10.0594V4.98771C17.6037 3.65625 17.6037 2.99052 17.3429 2.48197C17.1134 2.03464 16.7473 1.67094 16.297 1.44302C15.785 1.1839 15.1149 1.1839 13.7745 1.1839H5.47771C4.13733 1.1839 3.46715 1.1839 2.9552 1.44302C2.50487 1.67094 2.13874 2.03464 1.90929 2.48197C1.64844 2.99052 1.64844 3.65625 1.64844 4.98771V10.0594C1.64844 11.3909 1.64844 12.0566 1.90929 12.5652C2.13874 13.0126 2.50487 13.3762 2.9552 13.6041C3.46715 13.8633 4.13733 13.8633 5.47771 13.8633Z"
                          stroke="#FFA424"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="font-poppins font-normal text-[17px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                        {seller.email}
                      </span>
                    </div>
                    <div className="flex items-center justify-center text-left max-w-[240px] mx-auto ">
                      {/* location svg */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FFA424"
                        className="w-[16px] h-[16px] md:h-[24px] md:w-[20px] shrink-0 mr-[2px] mb-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21c4.5-4.5 7.5-7.5 7.5-12A7.5 7.5 0 0 0 12 1.5 7.5 7.5 0 0 0 4.5 9c0 4.5 3 7.5 7.5 12Z"
                        />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>

                      <span className="font-poppins font-normal text-[17px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                        {seller.address}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex items-center flex-col gap-2">
                    <button className="bg-[#FFA424] text-white font-medium md:text-[19px] text-[16px] leading-[100%] tracking-[-0.03em] text-center align-middle py-3 rounded-lg w-full max-w-[308px] font-poppins">
                      Contact Seller
                    </button>
                    <button className="border border-[#002D4A] text-[#002D4A] font-medium md:text-[19px] text-[16px] leading-[100%] tracking-[-0.03em] text-center align-middle py-3 rounded-lg w-full max-w-[308px] font-poppins">
                      Listings From Seller
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Load More Button */}
        {visibleCount < sellers.length && (
          <div className="flex justify-center items-center mt-14">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="group flex items-center border border-[#002D4A] rounded-[35px] gap-2
    transition-all duration-300 hover:bg-[#002D4A] active:scale-95 px-[23px] py-[17px] mb-3"
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
      <div className="bg-[#F7F7F7] md:pt-32 pt-0">
        <Footer />
      </div>
    </>
  );
}
