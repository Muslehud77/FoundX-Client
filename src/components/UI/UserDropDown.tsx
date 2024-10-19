"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserDropDown() {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="joe" />
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

        <DropdownItem className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
