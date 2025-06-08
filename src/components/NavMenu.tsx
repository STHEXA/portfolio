import Link from "next/link";
import { House, User, Briefcase, Mail } from "lucide-react";

export default function NavMenu() {
  const navList = [
    {
      name: "HOME",
      path: "/",
      icon: House,
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "ABOUT",
      path: "/about",
      icon: User,
      color: "from-green-500 to-blue-600",
    },
    {
      name: "WORKS",
      path: "/works",
      icon: Briefcase,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "CONTACT",
      path: "/contact",
      icon: Mail,
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <nav className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Navigation</h2>
      <div className="grid grid-cols-2 gap-4">
        {navList.map((item) => (
          <Link key={item.path} href={item.path} className="group block">
            <div
              className={`
              relative p-6 rounded-xl bg-gradient-to-br ${item.color} 
              text-white shadow-lg hover:shadow-xl transition-all duration-300
              hover:scale-105 hover:-translate-y-1
            `}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-sm tracking-wide">
                  {item.name}
                </span>
              </div>

              {/* ホバー時のオーバーレイ */}
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
