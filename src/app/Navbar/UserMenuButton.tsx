"use client";

import { Session } from "next-auth";
import Image from "next/image";
import profilePicPlaceholder from "@/assets/profile-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      {/* 1. This label is the dropdown trigger and makes the image clickable */}
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        {/* 2. This div ensures the image is correctly rounded */}
        <div className="w-10 rounded-full">
          <Image
            src={user?.image || profilePicPlaceholder}
            alt="Profile Picture"
            width={40}
            height={40}
          />
        </div>
      </label>

      {/* 3. This ul is the dropdown menu content */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {/* 4. The logic is moved inside the menu items (li) */}
        {user ? (
          <li>
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
      </ul>
    </div>
  );
}
