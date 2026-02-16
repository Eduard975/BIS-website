import INGENIUM from "../assets/logos/partners/event/ingenium.svg";

import NAGARRO from "../assets/logos/partners/pa/nagarro.svg";
import BURN from "../assets/logos/partners/pa/burn.png";
import MAGNA from "../assets/logos/partners/pa/magna.svg";
import MIGDALIN from "../assets/logos/partners/pa/migdalin.png";

import { BURN_LINK, MAGNA_LINK, MIGDALIN_LINK, NAGARRO_LINK } from "./Links";

export const CAROUSEL_ITEMS = [
  {
    id: 1,
    imageSrc: INGENIUM,
    altText: "INGENIUM",
    Url: "/partners",
    isRedirect: true,
  },
  // {
  //   id: 2,
  //   imageSrc: TUIASI,
  //   altText: "TUIASI",
  //   Url: "/partners",
  //   isRedirect: true,
  // },
  // {
  //   id: 3,
  //   imageSrc: WINK,
  //   altText: "WINK",
  //   Url: WINK_LINK,
  //   isRedirect: false,
  // },
  {
    id: 4,
    imageSrc: NAGARRO,
    altText: "NAGARRO",
    Url: NAGARRO_LINK,
    isRedirect: false,
  },
  // {
  //   id: 5,
  //   imageSrc: IULIUS,
  //   altText: "IULIUS MALL IASI",
  //   Url: IULIUS_LINK,
  //   isRedirect: false,
  // },
  {
    id: 6,
    imageSrc: BURN,
    altText: "BURN ENERGY DRINK",
    Url: BURN_LINK,
    isRedirect: false,
  },
  {
    id: 7,
    imageSrc: MAGNA,
    altText: "MAGNA",
    Url: MAGNA_LINK,
    isRedirect: false,
  },
  {
    id: 8,
    imageSrc: MIGDALIN,
    altText: "MIGDALIN",
    Url: MIGDALIN_LINK,
    isRedirect: false,
  },
];
