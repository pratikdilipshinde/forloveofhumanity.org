import Head from "next/head";
import HeroSection from "../components/HeroSection";
import PhotoMasonrySection from "@/components/PhotoMasonrySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>For the Love of Humanity</title>
      </Head>
      <HeroSection />
      <PhotoMasonrySection />
      <Footer />
    </>
  );
}
