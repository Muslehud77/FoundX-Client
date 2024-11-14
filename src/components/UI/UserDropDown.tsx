"use client";
import { useUser } from "@/src/context/user.provider";

import { Avatar } from "@nextui-org/avatar";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function UserDropDown() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user, handleLogout } = useUser();

  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <Dropdown ref={dropdownRef}>
      <DropdownTrigger>
        <Avatar
          className="cursor-pointer"
          name={user?.name}
          src={user?.profilePhoto}
        />
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => {
          if ((key as string)[0] === "/") {
            return navigate(key as string);
          }
        }}
      >
        <DropdownItem key="/profile">Profile</DropdownItem>
        <DropdownItem key="/profile/about">About</DropdownItem>
        <DropdownItem key="/profile/claim-requests">
          Claim-Requests
        </DropdownItem>
        <DropdownItem key="/profile/create-post">Create-Post</DropdownItem>
        <DropdownItem key="/profile/settings">Settings</DropdownItem>

        <DropdownItem
          onClick={() => handleLogout()}
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
