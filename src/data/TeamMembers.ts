import Ana from "../assets/team/ana.jpg";
import Edi from "../assets/team/edi.jpg";
import Diana from "../assets/team/diana.jpg";
import Ovidiu from "../assets/team/ovidiu.jpg";
import Simina from "../assets/team/simina.jpg";
import Diana_Ch from "../assets/team/diana_ch.jpg";
import {
  ANA_LINKEDIN,
  DIANA_CH_LINKEDIN,
  DIANA_LINKEDIN,
  EDI_LINKEDIN,
  OVIDIU_LINKEDIN,
  SIMINA_LINKEDIN,
} from "./Links";

export const TEAM_MEMBERS = [
  {
    id: 1,
    lastName: "Ifrim",
    name: "Simina-Ana",
    role: "HR Organiser",
    image: Simina,
    linkedin: SIMINA_LINKEDIN,
  },
  {
    id: 2,
    lastName: "Ciobanu",
    name: "Ana-Maria",
    role: "Main Organizer",
    image: Ana,
    linkedin: ANA_LINKEDIN,
  },
  {
    id: 3,
    lastName: "Petrișor",
    name: "Eduard-Gabriel",
    role: "IT & Logistics",
    image: Edi,
    linkedin: EDI_LINKEDIN,
  },
  {
    id: 4,
    lastName: "Ciobotaru",
    name: "Diana",
    role: "Design",
    image: Diana,
    linkedin: DIANA_LINKEDIN,
  },
  {
    id: 5,
    lastName: "Zoicaș",
    name: "Ovidiu",
    role: "Marketing",
    image: Ovidiu,
    linkedin: OVIDIU_LINKEDIN,
  },
  {
    id: 6,
    lastName: "Chelea",
    name: "Diana",
    role: "Official Open Day",
    image: Diana_Ch,
    linkedin: DIANA_CH_LINKEDIN,
  },
];
