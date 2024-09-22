import Networking from "../assets/Are Modems and Routers The Same_.jpeg";
import Metasploit from "../assets/Metasploit - Hack Stuff Like A Pro Sticker.jpeg";
import Digital from "../assets/Types Of Digital Forensics.jpeg";
import AIcs from "../assets/Top 10 AI Companies In The World.jpeg";
import Vuln from "../assets/Vulnerability.jpeg";
import Bounty from "../assets/Born To Be Bug Bounty Hunter Binary Programming Code Wall And Art Print.jpeg";
import Redteam from "../assets/download.jpeg";
import Whiteteam from "../assets/Becoming a White Hat Hacker_ A Comprehensive Guide.jpeg";
import John from "../assets/How to Brute Force a Password Protected Rar_zip file using John the Ripper (1).jpeg";
import Tor from "../assets/How To Install Tor Browser on Ubuntu 18_04 LTS.jpeg";
import Kali from "../assets/Kali.jpeg";
import Archlinux from "../assets/Arch Linux by macjoris.jpeg";
import RedHat from "../assets/The world's open source leader.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Courses", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const COURSES = [
  {
    image: Networking,
    title: "Networking ",
    description: "Learn the skill of networking to become network engineer",
  },
  {
    image: Metasploit,
    title: "HACKING WITH METASPLOIT",
    description: "Learn to hack with metasploit and exploit vulnability",
  },
  {
    image: Digital,
    title: "DIGITAL FORENSICS ",
    description: "Learn the art of digital forensics investigation and discovering of footprint",
  },
  {
    image: AIcs,
    title: "ARTIFICIAL INTELLIGENT IN CYBER SECURITY",
    description: "Learn the art of artificial intelligent in cyber security ",
  },
  {
    image: Vuln,
    title: "VULNABILITY MANAGEMENT",
    description: "Learn the art vulnability assessment and management",
  },
  {
    image: Bounty,
    title: "BUG BOUNTY HUNTER",
    description: "Learn how to become a bug bounty hunter ",
  },
  {
    image: Redteam,
    title: "RED HAT TEAM HACKER",
    description: "Learn how to become a red team hacker from zero to master",
  },
  {
    image: Whiteteam,
    title: "WHITTE HAT TEAM HACKER",
    description: "Learn how to become a white hat hacker and defend your company ",
  },
  {
    image: John,
    title: "JOHN THE REAPER",
    description: "Learn password cracking with one of the most strong tool John the Reaper",
  },
  {
    image: Tor,
    title: "TOR BROWSER",
    description:
      "Learn how to use tor browser to access the dark web and be anonymous on the internet",
  },
];

export const ABOUT = {
  header: "Master Cybersecurity and Ethical Hacking",
  content:
    "At CyberOp, we provide expert-led training in cybersecurity awareness, defenses, white hat hacking, red team operations, and ethical hacking. Our courses are designed to equip individuals and organizations with the skills needed to protect against modern cyber threats. Whether you're new to the field or enhancing your expertise, we offer hands-on learning to help you succeed in the evolving world of cybersecurity. Join us at CyberOp and become a part of a community dedicated to promoting ethical hacking and building a safer digital world.",
};

export const MISSION =
  "To empower individuals and organizations with the skills to secure digital spaces through expert training in cybersecurity and ethical hacking.";

export const CUSINES = [
  {
    number: "01.",
    image: Kali,
    title: "KALI LINUX",
    description:
      "Kali Linux is a security-focused OS used for ethical hacking and penetration testing. It includes powerful tools for assessing and securing systems.",
  },
  {
    number: "02.",
    image: Archlinux,
    title: " ARCH LINUX",
    description:
      "Arch Linux is a lightweight, flexible Linux distribution designed for advanced users. It follows a rolling release model and emphasizes simplicity, customization, and user control",
  },
  {
    number: "03.",
    image: RedHat,
    title: "RedHat LINUX",
    description:
      "Red Hat is a stable, enterprise-focused Linux distribution used for servers and cloud infrastructure. It’s known for security, support, and scalability.",
  },
];

export const REVIEW = {
  name: "SALAH YASIN",
  profession: "Ethical Hacker ",
  content:
    "“I really like how clear and concise the information is! It immediately tells me what the platform offers without any fluff. The focus on hands-on training, especially in ethical hacking and real-world applications, is exactly what I'm looking for. It’s great that the courses cover everything from beginner to advanced levels, and the emphasis on protecting digital environments through practical skills feels spot on. ”",
};

export const CONTACT = [
  { key: "address", value: "Address: Juba  City, central Equatoria State, South Ssudan" },
  { key: "phone", value: "Phone: 211927704761" },
  { key: "email", value: "Email: SalahyasinIbrahim@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://=09",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80 " />,
  },
];
