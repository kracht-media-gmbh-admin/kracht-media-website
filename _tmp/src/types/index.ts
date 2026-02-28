import { SimpleIcon } from "simple-icons";

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: {
    year: number;
    month: number;
    day: number;
  }
  content: string;
  image: string;
  images?: string[];
}

export interface ProjectData {
  slug: string;
  title: string;
  year: number;
  group: string;
  preamble: string;
  shortDescription: string;
  tileDescription: string;
  description: string[];
  image: ImageAsset;
  mediaLink?: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialNavLink extends NavLink {
  icon: SimpleIcon;
}

export interface VideoAsset {
  src: string;
  fallbackImage?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}