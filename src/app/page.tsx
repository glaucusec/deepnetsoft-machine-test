import Header from "../components/Header";
import ItemsBanner from "../components/ItemsBanner";
import Banner from "@/components/Banner";
import Menu from "../components/menu/Menu";
import ServiceBanner from "../components/ServiceBanner";
import Footer from "../components/footer/Footer";
import ContentLayout from "../components/ContentLayout";
export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <ItemsBanner />
      <ContentLayout>
        <Menu />
        <ServiceBanner />
      </ContentLayout>
      <Footer />
    </main>
  );
}
