import Link from "next/link";
import { UserGroupIcon } from "@heroicons/react/24/solid";

export default function Logo() {
  return (
    <Link
      href="/"
      className="select-none font-medium flex space-x-2 items-center"
    >
      <UserGroupIcon className="w-5 h-5" />
      <h1>Contact</h1>
    </Link>
  );
}
