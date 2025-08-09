import Image from "next/image";
import Logo from "@/public/logo.png";
type faviconType = {
  domain: string;
  alt: string;
};

export default function Favicon({ domain }: faviconType) {
  function extractDomain(url: string) {
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/.\n]+\.[a-z]{2,})(?:\/|$)/i
    );
    if (match) {
      const fullDomain = match[1];
      const parts = fullDomain.split(".");
      if (parts.length >= 2) {
        return parts[0];
      }
    }
  }

  return (
    <Image
      className="mr-2"
      src={Logo}
      width={17}
      height={17}
      alt={extractDomain(domain) || ""}
    />
  );
}
