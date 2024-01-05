"use client"

import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { switchLoginModalVisibility, switchSignUpModalVisibility } from "../reducers/homeStateSlice";
import { logout } from "../reducers/loginStateSlice";

interface NavItem {
  label: string;
  link: string;
  showWhenLoggedIn:boolean;
  showWhenNotLoggedIn:boolean;
  action: string;
}

interface NavBarProps {
  navItems: NavItem[];
}

export default function NavBar(props: NavBarProps) {
    const isLoggedIn = useAppSelector((state)=>{
        return state.loginState.isLoggedIn
    })
    const dispatch = useAppDispatch()
    const handleClick = (index: number)=>{
        switch(props.navItems[index].action){
            case 'logout':{
                dispatch(logout())
                break
            }
            case 'signup':{
                dispatch(switchSignUpModalVisibility())
                break
            }
            case 'login':{
              dispatch(switchLoginModalVisibility())
            }
            default:{
                
            }
        }
    }
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">Custom Chess</div>
            <ul className="flex space-x-4">
              {props.navItems.map((item, index) => (
                ((isLoggedIn && item.showWhenLoggedIn) || (!isLoggedIn) && item.showWhenNotLoggedIn) && <li key={index}>
                  <Link href={item.link} onClick={()=>{handleClick(index)}}>
                    <div className="cursor-pointer hover:text-yellow-300 transition duration-300 rounded-full p-2">{item.label}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      );
}
