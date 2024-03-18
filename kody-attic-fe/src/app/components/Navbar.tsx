import Link from "next/link";
import logos from "@/app/assets/logos/KAlogo-fff.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-neutral-950 bg-opacity-75">
      <Link href="/">
        <img className="max-w-[150px]" src={logos.src} alt="Kody Attic Logo" />
      </Link>
      <div className="flex-1 flex justify-center gap-4 font-light text-white">
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/furniture">Furniture</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}
