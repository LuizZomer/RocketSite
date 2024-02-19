import Image from "next/image";
import Header from "@/components/Header";
import Sobre from "@/components/Sobre";
import Encontrar from "@/components/Encontrar";
import Esports from "@/components/Esports";
import Suporte from "@/components/Suporte";
import Times from "@/components/Times";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Sobre />
        <Encontrar />
        <Esports />
        <Times />
        <Suporte />
        <Footer />
      </main>
    </>
  );
}
