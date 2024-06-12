import Image from "next/image";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Menu />
    </main>
  );
}
