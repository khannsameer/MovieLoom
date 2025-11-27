import { BiMoviePlay } from "react-icons/bi";
import { PiTelevisionLight } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  {
    lable: "TV Shows",
    href: "tv",
    icon: <PiTelevisionLight />,
  },
  {
    lable: "Movies",
    href: "movie",
    icon: <BiMoviePlay />,
  },
];

export const mobileNavigation = [
  {
    lable: "Home",
    href: "/",
    icon: <TiHome />,
  },
  ...navigation,
  {
    lable: "Search",
    href: "/search",
    icon: <IoSearchOutline />,
  },
];
