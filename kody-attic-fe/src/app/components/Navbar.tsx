import Link from "next/link";
import logos from "@/app/assets/logos/KAlogo-fff.png";
import { GiRabbitHead } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-neutral-950">
      <Link href="/">
        <img className="max-w-[100px] ml-4" src={logos.src} alt="Kody Attic Logo" />
      </Link>
      <div className="flex gap-8 font-light text-white m-4">
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/furniture">Furniture</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Us</Link>
        <button className="flex justify-items-end">
          <GiRabbitHead size="30px"/>
        </button>
        <button className="flex justify-items-end">
          <GiShoppingCart size="30px"/>
        </button>
      </div>
    </nav>
  );
}
