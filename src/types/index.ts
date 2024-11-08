import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type TPost = {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  status: string;
  isReported: boolean;
  reportCount: number;
  category: TCategory;
  user: TUser;
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TCategory = {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TUser = {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TClaimant = {
  _id: string;
  name: string;
  role: "USER" | "ADMIN";
  email: string;
  status: "ACTIVE" | "INACTIVE";
  mobileNumber: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profilePhoto: string;
};


export type TAnswer = {
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
};

export type TClaimRequest = {
  _id: string;
  item?: TPost;
  claimant: string | TClaimant;
  status: string;
  description: string;
  answers: TAnswer[];
  feedback: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TReceivedClaimRequest = TPost & {
  claimRequests: TClaimRequest[];
}