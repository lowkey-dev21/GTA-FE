"use client";
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";

const EducationPage = () => {
  const authUser: any = useContext<object>(UserContext);
  return <div>{authUser.email}</div>;
};

export default EducationPage;
