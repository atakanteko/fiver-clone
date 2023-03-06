import { IconWorld, IconBrandNexo } from "@tabler/icons-react";

export const navigation = [
  {
    id: "fiver_business",
    title: "Fiver Business",
    type: "single",
    url: "/business",
    icon: false,
  },
  {
    id: "explore",
    title: "Explore",
    type: "single",
    url: "/explore",
    icon: false,
  },
  {
    id: "language",
    title: "English",
    type: "multi",
    icon: IconWorld,
  },
  {
    id: "currency",
    title: "USD",
    type: "multi",
    icon: IconBrandNexo,
  },
  {
    id: "become_a_seller",
    title: "Become a Seller",
    type: "single",
    url: "/became-seller",
    icon: false,
  },
  {
    id: "sing_in",
    title: "Sign In",
    type: "single",
    url: "/sign-in",
    icon: false,
  },
];
