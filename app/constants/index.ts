import shoe1 from "@/app/assets/shoe1.svg";
import shoe2 from "@/app/assets/shoe2.svg";
import shoe3 from "@/app/assets/shoe3.svg";
import { BestOfBestCardProps, LoveUsCardProps } from "../types/interface";
import kontrastr from "@/app/assets/kontrastr.svg";
import zoomer from "@/app/assets/zoomerr.svg";
import shells from "@/app/assets/shells.svg";
import artVenue from "@/app/assets/artVenue.svg";
import waves from "@/app/assets/waves.svg";
import kontrastrAvatar from "@/app/assets/kontrastrAvatar.svg";
import zoomerAvatar from "@/app/assets/zoomerrAvatar.svg";
import shellsAvatar from "@/app/assets/shellsAvatar.svg";
import artVenueAvatar from "@/app/assets/artVenueAvatar.svg";
import wavesAvatar from "@/app/assets/wavesAvatar.svg";

export const navbarButtonNames = ["Products", "Solutions", "Pricing", "Resources", "Log In", "Sign up now"];

export const footerButtonNames = {
  product: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
  solutions: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"],
  support: ["Contact Us", "Developers", "Documentation", "Integrations", "Reports"],
};

export const bestOfBestCardsData: BestOfBestCardProps[] = [
  {
    image: shoe1,
    title: "Title",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    image: shoe2,
    title: "Title",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    image: shoe3,
    title: "Title",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];

export const loveUsCardsData: LoveUsCardProps[] = [
  {
    logo: kontrastr,
    companyName: "kontrastr",
    description:
      "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
    avatar: kontrastrAvatar,
    userName: "Ralph Edwards",
    userTitle: "Product Designer",
  },
  {
    logo: zoomer,
    companyName: "Zoomerr",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    avatar: zoomerAvatar,
    userName: "Hellen Jummy",
    userTitle: "Team Lead",
  },
  {
    logo: shells,
    companyName: "SHELLS",
    description:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    avatar: shellsAvatar,
    userName: "Hellena John",
    userTitle: "Co-founder",
  },
  {
    logo: artVenue,
    companyName: "ArtVenue",
    description:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    avatar: artVenueAvatar,
    userName: "David Oshodi",
    userTitle: "Manager",
  },
  {
    logo: waves,
    companyName: "WAVES",
    description:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    avatar: wavesAvatar,
    userName: "Charolette Hanlin",
    userTitle: "CEO",
  },
];
