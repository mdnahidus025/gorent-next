import { StaticImageData } from "next/image";

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  image: string | StaticImageData;
  text: string;
  rating: number;
  link: string;
}

export interface TestimonialTwo {
    id: number;
    name: string;
    role: string;
    image: string | StaticImageData;
    text: string;
    link: string;
}















