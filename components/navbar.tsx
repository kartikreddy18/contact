import Link from "next/link";
import Logo from "./logo";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-around bg-gray-100 p-5 shadow-sm rounded-b">
      <Logo />
      <Link href="/dashboard" className="font-medium">
        Dashboard
      </Link>
    </nav>
  );
};
