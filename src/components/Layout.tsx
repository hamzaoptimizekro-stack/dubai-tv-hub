import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ServiceArea from "./ServiceArea";
import WhatsAppButton from "./WhatsAppButton";
import PageLoader from "./PageLoader";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageLoader />
      <main className="flex-1">
        <Outlet />
      </main>
      <ServiceArea />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
