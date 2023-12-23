import React from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  link: string;
}

interface FooterProps {
  links: FooterLink[];
}

export default function Footer(props: FooterProps) {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white rounded-t-md">
          <div className="flex justify-center items-center">
            <ul className="flex space-x-4">
              {props.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.link}>
                    <div className="cursor-pointer hover:text-yellow-300 transition duration-300 rounded-md p-2">{link.label}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      );
}
