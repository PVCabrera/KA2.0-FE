import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      
      {/* Test Links to pages */}
      <Link href="/about">About</Link>;
      <Link href="/gallery">Gallery</Link>;
      <Link href="/furniture">Furniture</Link>;
      <Link href="/services">Services</Link>;
      <Link href="/contact">Contact Us</Link>;
    </>
  );
}
