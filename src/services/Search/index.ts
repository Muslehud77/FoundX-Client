"use server";

import axiosInstance from "@/src/lib/AxiosInstance";



export const searchItem = async (searchTerm:string) => {
  try {
    const res = await axiosInstance.get(
      `/search-items?searchTerm=${searchTerm}`
    );

    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data");
  }
};
