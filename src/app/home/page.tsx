"use client";

import { UserContext } from "@/hooks/userContext";
import { useContext } from "react";
const HomePage = () => {
  const authUser = useContext(UserContext);
  return <div>Home page {authUser.email}</div>;
};

export default HomePage;
