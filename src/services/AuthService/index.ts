"use server"

import axiosInstance from "@/src/lib/AxiosInstance"
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (user:FieldValues) => {
    
    try{
        const {data} = await axiosInstance.post("/auth/register", user);
        if(data.success){
            cookies().set("accessToken",data?.data?.accessToken);
            cookies().set("refreshToken",data?.data?.refreshToken);
        }
    }catch(e:any){
        console.log(e);
        throw new Error(e);
    }

}