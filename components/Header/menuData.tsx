import { Menu } from "@/types/menu"; // Hapus import type ini jika file Anda menggunakan JS biasa

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Keunggulan",
    path: "/#features",
    newTab: false,
  },
  {
    id: 3,
    title: "Paket Internet",
    path: "/#pricing",
    newTab: false,
  },
];

export default menuData;
