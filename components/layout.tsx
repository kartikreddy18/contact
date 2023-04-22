import { ReactNode } from "react";
import { Navbar } from "./navbar";
import ModelProvider from "@/components/modal/ModelProvider";
import { Toaster } from "react-hot-toast";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Toaster />
      <ModelProvider />
    </>
  );
};
