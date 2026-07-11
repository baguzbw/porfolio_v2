"use client";

import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SocialCard } from "@/components/SocialCard";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

const channels = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "Best for inquiries, freelance work, or collaboration.",
    ctaLabel: "Send an email",
    href: `mailto:${profile.email}`,
    color: "#F97316",
  },
  {
    icon: Github,
    title: "GitHub",
    subtitle: "Browse my source code and open-source work.",
    ctaLabel: "View profile",
    href: profile.links.github,
    color: "#9CA3AF",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Connect with me professionally.",
    ctaLabel: "Connect",
    href: profile.links.linkedin,
    color: "#0A66C2",
  },
  {
    icon: Instagram,
    title: "Instagram",
    subtitle: "Follow along for behind-the-scenes updates.",
    ctaLabel: "Follow",
    href: profile.links.instagram,
    color: "#E4405F",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl">
      <PageHeader title="Contact" subtitle="Let's get in touch." size="lg" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map((channel, i) => (
          <Reveal key={channel.title} delay={Math.min(i * 60, 240)}>
            <SocialCard {...channel} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
