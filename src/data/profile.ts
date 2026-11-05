export interface ProfileData {
  displayName: string;
  brandName: string;
  username: string;
  tagline: string;
  heroLabel: string;
  identityRoles: string[];
  heroDescription: string;
  aboutTitle: string;
  aboutStarter: string;
  aboutPhilosophy: string;
  avatar: string;
  avatarAlt: string;
  logo: string;
  location: string;
  status: string;
  meta: {
    title: string;
    description: string;
    url: string;
  };
}

export const profileData: ProfileData = {
  displayName: "KRATOS",
  brandName: "KRATOS",
  username: "@KratosOnWeb3",
  tagline: "BEYOND THE TIMELINE.",
  heroLabel: "KRATOS / DIGITAL IDENTITY",
  identityRoles: [
    "CT GUY",
    "SHITPOSTER",
    "CAMPAIGN HUNTER",
    "WEB3 CONTRIBUTOR",
    "EARLY PROJECT EXPLORER",
  ],
  heroDescription:
    "Exploring the culture, discovering what comes next, and being part of the internet's evolving ecosystem.",
  aboutTitle: "WHO IS KRATOS?",
  aboutStarter:
    "I'm KRATOS. Somewhere between Crypto Twitter, Web3 culture, shitposting, and discovering what comes next.",
  aboutPhilosophy:
    "I explore emerging ecosystems, follow interesting ideas, participate in online communities, and enjoy being part of the internet's constantly evolving culture.",
  avatar: "/images/kratos-avatar.png",
  avatarAlt: "KRATOS Official Avatar - Cyberpunk Web3 Digital Identity",
  logo: "/images/kratos-logo.png",
  location: "Decentralized / Timeline",
  status: "ONLINE // MONITORING TIMELINE",
  meta: {
    title: "KRATOS — Beyond the Timeline | Web3 Digital Identity",
    description:
      "Explore KRATOS, a CT guy and Web3 personality. Discover the digital identity and connect across X, Discord, and Telegram.",
    url: "https://kratos-on-web3.vercel.app", // Canonical placeholder
  },
};

