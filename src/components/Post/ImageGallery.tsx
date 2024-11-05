"use client";

import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Link from "next/link";
import { Image } from "@nextui-org/image";

interface IProps {
  images: string[];
}

export default function ImageGallery({ images }: IProps) {
  return (
    <LightGallery
      elementClassNames={`!w-full mt-2 gap-2 grid 
         ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"} `}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {images?.map((image, index) => (
        <Link
          className={`w-full flex justify-center items-center ${
            images.length === 3 && index === 0 ? "col-span-2" : "col-span-1"
          }`}
          key={index}
          href={image}
        >
          <Image
            
            className=" w-full object-cover rounded-none"
            src={image}
            height={500}
            alt={`image-${index}`}
          />
        </Link>
      ))}
    </LightGallery>
  );
}
