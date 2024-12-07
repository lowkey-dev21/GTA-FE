import { StaticImageData } from "next/image";

export type Nav_item = {
  name: string;
  link: string;
};

export interface Header_props {
  logo: StaticImageData;
  mode_toggle: React.ReactNode;
  logo_name_one: string;
  logo_name_two: string;
  logo_name_three: string;
  auth_operator: React.ReactNode;
  nav_links: Nav_item[];
}
