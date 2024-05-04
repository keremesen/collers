import shoe1 from "@/app/assets/shoe1.svg";
import shoe2 from "@/app/assets/shoe2.svg";
import shoe3 from "@/app/assets/shoe3.svg";
import { BestOfBestCardProps, LoveUsCardProps, collectionDataProps } from "../types/interface";
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
import collection from "@/app/assets/collection/collection.svg";
import search from "@/app/assets/collection/search.svg";
import shield from "@/app/assets/collection/shield.svg";
import rocket from "@/app/assets/collection/rocket.svg";
import screen from "@/app/assets/collection/screen.svg";
import podcast from "@/app/assets/collection/podcast.svg";
import settings from "@/app/assets/collection/settings.svg";

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

export const collectionData: collectionDataProps[] = [
  {
    title: "Bibendum tellus",
    icon: search,
    content: collection,
  },
  {
    title: "Cras eget",
    icon: shield,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus purus erat. Duis ut neque urna. Vestibulum neque tortor, porttitor a gravida sed, pharetra vel nulla. Mauris hendrerit augue a laoreet tincidunt. Ut quis facilisis est. Proin vehicula tincidunt leo, quis dapibus turpis faucibus vel. Nunc accumsan sem nibh, eu vestibulum ipsum hendrerit ut. Quisque id nisl a ante pulvinar euismod.",
  },
  {
    title: "Dolor pharetra",
    icon: rocket,
    content:
      "Proin id lacus vel nunc fermentum pretium. Phasellus vitae vestibulum metus. Nam ac euismod diam. Nam rhoncus lectus vitae cursus venenatis. Suspendisse potenti. Curabitur malesuada, tellus at lobortis euismod, nunc velit sagittis elit, sed suscipit est ante pulvinar neque. Nulla viverra lacinia massa non dapibus. Vestibulum cursus turpis sit amet arcu dignissim varius.",
  },
  {
    title: "Amet, fringilla",
    icon: screen,
    content:
      "Vivamus eu justo tincidunt, semper nunc eget, egestas leo. Nullam eget vehicula felis, id sollicitudin tortor. Sed eu imperdiet nisi. Praesent condimentum turpis eu nisl mattis ultrices. Suspendisse auctor malesuada justo et faucibus. Sed in ipsum pulvinar lacus molestie vehicula nec a orci. Quisque pharetra feugiat lacus, et auctor nisl congue sed. Ut condimentum vitae diam sed placerat. Aliquam maximus libero eros, sed facilisis lacus efficitur ac. Aenean id malesuada urna, id semper diam. In sit amet turpis convallis, malesuada nisl non, condimentum lorem. Morbi a risus diam. Etiam tortor felis, viverra vitae nisi ac, venenatis sagittis turpis. Quisque a lacus ac lectus porta blandit. Maecenas a sapien at ante hendrerit pulvinar. Maecenas efficitur elementum aliquam.",
  },
  {
    title: "Amet nibh",
    icon: podcast,
    content:
      "Phasellus orci dui, fringilla at venenatis lobortis, volutpat nec orci. Quisque aliquam fermentum purus, a tempus nisi ultrices a. Praesent volutpat nulla vel molestie elementum. Sed et consectetur mi. Sed ultricies elit non nisl finibus, et convallis sem accumsan. Nullam a nibh sit amet velit ullamcorper cursus non nec ex. Donec ut suscipit dolor.",
  },
  {
    title: "Sed velit",
    icon: settings,
    content:
      "Nam porta gravida mauris eu accumsan. Vestibulum tempus, nibh in venenatis pretium, erat ipsum ornare mauris, ac dapibus purus elit vel felis. Mauris accumsan nunc et volutpat hendrerit. Sed lobortis elementum ante, ut posuere metus bibendum id. Vivamus sodales eu tellus eu ultrices. Duis rutrum, libero et finibus convallis, ex metus tempus tortor, in dignissim est tortor vel libero. Praesent placerat augue in velit accumsan fringilla. Aenean placerat ornare interdum. Vivamus quis urna sem. Maecenas ut pretium erat.",
  },
];
