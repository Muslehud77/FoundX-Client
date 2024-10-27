"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (user: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", user);
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
export const loginUser = async (user: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", user);
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const logoutUser = () => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
}


export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

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
    };
  }

  return decodedToken

};
 