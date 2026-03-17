import Ana from "../assets/team/ana.jpg";
import Edi from "../assets/team/edi.jpg";
import Diana from "../assets/team/diana.jpg";
import Ovidiu from "../assets/team/ovidiu.jpg";
import Simina from "../assets/team/simina.jpg";
import Diana_Ch from "../assets/team/diana_ch.jpg";
import Teo from "../assets/team/teo.jpg";
import Valentina from "../assets/team/valentina.jpg";

import {
  ANA_LINKEDIN,
  DIANA_CH_LINKEDIN,
  DIANA_LINKEDIN,
  EDI_LINKEDIN,
  OVIDIU_LINKEDIN,
  SIMINA_LINKEDIN,
  TEO_LINKEDIN,
  VALENTINA_LINKEDIN,
} from "./Links";

export const TEAM_MEMBERS = [
  {
    id: 1,
    lastName: "Ifrim",
    name: "Simina-Ana",
    role: "HR Organiser",
    image: Simina,
    linkedin: SIMINA_LINKEDIN,
    shouldSplitName: true,
  },
  {
    id: 2,
    lastName: "Ciobanu",
    name: "Ana-Maria",
    role: "Main Organizer",
    image: Ana,
    linkedin: ANA_LINKEDIN,
    shouldSplitName: true,
  },
  {
    id: 3,
    lastName: "Petrișor",
    name: "Eduard-Gabriel",
    role: "IT & Logistics",
    image: Edi,
    linkedin: EDI_LINKEDIN,
    shouldSplitName: true,
  },
  {
    id: 4,
    lastName: "Ciobotaru",
    name: "Diana",
    role: "Design",
    image: Diana,
    linkedin: DIANA_LINKEDIN,
    shouldSplitName: false,
  },
  {
    id: 5,
    lastName: "Zoicaș",
    name: "Ovidiu",
    role: "Marketing",
    image: Ovidiu,
    linkedin: OVIDIU_LINKEDIN,
    shouldSplitName: false,
  },
  {
    id: 6,
    lastName: "Chelea",
    name: "Diana",
    role: "Official Open Day",
    image: Diana_Ch,
    linkedin: DIANA_CH_LINKEDIN,
    shouldSplitName: false,
  },
  {
    id: 7,
    lastName: "Ștefură",
    name: "Teodora-Gabriela",
    role: "FR Corporate",
    image: Teo,
    linkedin: TEO_LINKEDIN,
    shouldSplitName: true,
  },
  {
    id: 8,
    lastName: "Eftimie",
    name: "Elisabetta Valentina",
    role: "FR Products",
    image: Valentina,
    linkedin: VALENTINA_LINKEDIN,
    shouldSplitName: true,
  },
];
