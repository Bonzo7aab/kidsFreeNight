import { Icons } from '@/components/icons';

export interface Trainers {
  id: number;
  created_at: string;
  approved_date: string;
  updated_at: string;
  name: string;
  photo_url: string;
  description: string;
  salary: number;
  category: string;
  experience: string;
  specialization: string;
  availibility: string;
  completed_events: string[];
  email: string;
  phone_number: string;
}

export interface Place {
  id: number;
  created_at: string;
  approved_date: string;
  updated_at: string;
  name: string;
  photo_url: string;
  location: string;
  coordinates: {
    lat: number;
    long: number;
  };
  availibility: string[];
  rent_price: number;
  activities: string[];
  email: string;
  phone_number: string;
}

export interface People {
  parents: Parent[];
  kids: Kid[];
}

export interface Parent {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  surname: string;
  kids: string[];
  location: string;
  availibility_days: string[];
  email: string;
  phone_number: string;
  activities: string[];
}

export interface Kid {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  surname: string;
  age: number;
  liked_activities: string[];
}

export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: NavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
