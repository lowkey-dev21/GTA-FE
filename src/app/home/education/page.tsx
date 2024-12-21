"use client";
import { UserContext } from "@/hooks/userContext";
import { useContext } from "react";

const EducationPage = () => {
  const authUser: any = useContext<any>(UserContext);
  return <div>{authUser.email}</div>;
};

export default EducationPage;
