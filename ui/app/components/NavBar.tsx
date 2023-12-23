import React from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  link: string;
}

interface NavBarProps {
  navItems: NavItem[];
}

export default function NavBar(props: NavBarProps) {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">Custom Chess</div>
            <ul className="flex space-x-4">
              {props.navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
                    <div className="cursor-pointer hover:text-yellow-300 transition duration-300 rounded-full p-2">{item.label}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      );
}
