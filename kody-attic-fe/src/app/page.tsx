import Link from "next/link";
import Layout from "@/app/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Hello World!</h1>
        {/* Test Links to pages */}
        <Link href="/about">About</Link>;<Link href="/gallery">Gallery</Link>;
        <Link href="/furniture">Furniture</Link>;
        <Link href="/services">Services</Link>;
        <Link href="/contact">Contact Us</Link>;
      </Layout>
    </>
  );
}
