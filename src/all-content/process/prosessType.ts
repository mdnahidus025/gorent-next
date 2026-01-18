import { StaticImageData } from "next/image";

export interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: string;
    bg: string | StaticImageData;
}
export interface PricingPlanThree {
    id: number;
    title: string;
    price: number;
    image: string | StaticImageData;
    features: string[];
}