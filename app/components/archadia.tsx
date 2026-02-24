import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string; // Allows you to pass Tailwind classes from the parent
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 500, height = 200 }: LogoProps) {
  return (
    // Wrapping the logo in a Link so clicking it goes to the homepage
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/whit_-03.png" // This path looks directly inside the 'public' folder
        alt="Company Logo"
        width={width}
        height={height}
        priority // Add this if the logo is "above the fold" to load it immediately
        className="object-contain"
      />
    </Link>
  );
}