"use client";
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";

const HomePage = () => {
  const user = useContext(UserContext);
  // No need for auth checks here since Layout handles it
  return <div>Home page {user.email}</div>;
};

export default HomePage;
