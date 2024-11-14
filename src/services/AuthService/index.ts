"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (user: FieldValues) => {
   const cookieStore = await cookies();
  try {
    const { data } = await axiosInstance.post("/auth/register", user);
    if (data.success) {
     cookieStore.set("accessToken", data?.data?.accessToken);
     cookieStore.set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const loginUser = async (user: FieldValues) => {
   const cookieStore = await cookies();
  try {
    const { data } = await axiosInstance.post("/auth/login", user);
    if (data.success) {
     cookieStore.set("accessToken", data?.data?.accessToken);
     cookieStore.set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const logoutUser = async () => {
   const cookieStore = await cookies();
 cookieStore.delete("accessToken");
 cookieStore.delete("refreshToken");

};

export const getCurrentUser = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      status: decodedToken.status,
      profilePhoto : decodedToken.profilePhoto
    };
  }

  return decodedToken;
};
 