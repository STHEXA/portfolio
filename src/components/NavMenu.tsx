import Link from "next/link";
import { House, User, Briefcase, Mail } from "lucide-react";

export default function NavMenu() {
  const navList = [
    {
      name: "HOME",
      path: "/",
      icon: House,
    },
    {
      name: "ABOUT",
      path: "/about",
      icon: User,
    },
    {
      name: "WORKS",
      path: "/works",
      icon: Briefcase,
    },
    {
      name: "CONTACT",
      path: "/contact",
      icon: Mail,
    },
  ];
  return (
    <nav className="flex flex-col gap-3">
      {navList.map((item) => (
        <li key={item.path} className="list-none">
          <Link href={item.path} className="flex items-center">
            <item.icon className="mr-3" />
            {item.name}
          </Link>
        </li>
      ))}
    </nav>
  );
}
