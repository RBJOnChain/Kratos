export interface SocialPlatform {
  id: "x" | "discord" | "telegram";
  name: string;
  handle: string;
  url: string | null;
  description: string;
  badge: string;
  status: "active" | "configurable";
  actionLabel: string;
  isExternalLink: boolean;
}

export const socialLinks: SocialPlatform[] = [
  {
    id: "x",
    name: "X / TWITTER",
    handle: "@KratosOnWeb3",
    url: "https://x.com/KratosOnWeb3",
    description: "Daily shitposting, real-time campaign commentary, Web3 alpha, and culture exploration.",
    badge: "PRIMARY FREQUENCY",
    status: "active",
    actionLabel: "OPEN TIMELINE",
    isExternalLink: true,
  },
  {
    id: "telegram",
    name: "TELEGRAM",
    handle: "@KratosOnWeb3",
    url: "https://t.me/KratosOnWeb3",
    description: "Direct communications, alpha signals, early discussion, and network connections.",
    badge: "DIRECT LINK",
    status: "active",
    actionLabel: "LAUNCH TELEGRAM",
    isExternalLink: true,
  },
  {
    id: "discord",
    name: "DISCORD",
    handle: "@KratosOnWeb3",
    // Configurable field: Set below or via NEXT_PUBLIC_DISCORD_URL env variable.
    // If null or empty, the UI displays the verified username with a copy button rather than a broken link.
    url: process.env.NEXT_PUBLIC_DISCORD_URL || null,
    description: "Community hubs, decentralized protocol coordination, and ecosystem server presence.",
    badge: "CONFIGURABLE IDENT",
    status: "configurable",
    actionLabel: "COPY USERNAME",
    isExternalLink: false,
  },
];

