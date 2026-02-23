import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CONTACT, SITE_URL } from "@/config/site";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import UsedTvBuyerDubai from "./pages/UsedTvBuyerDubai";
import UsedTvSellerDubai from "./pages/UsedTvSellerDubai";
import LocationServicePage from "./pages/LocationServicePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ReturnRefundPolicy from "./pages/ReturnRefundPolicy";
import TradingLicense from "./pages/TradingLicense";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>UsedTV Dubai - Buy & Sell Used TVs in Dubai, UAE | Best Prices</title>
          <meta name="description" content={`Dubai's #1 trusted platform for buying and selling used TVs. Samsung, LG, Sony & all brands. Instant cash, free pickup, same-day service. Call ${CONTACT.phoneDisplay}.`} />
          <meta name="keywords" content="used TV Dubai, buy used TV Dubai, sell used TV Dubai, second hand TV Dubai, used television UAE, cheap TV Dubai" />
          <link rel="canonical" href={`${SITE_URL}/`} />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
              <Route path="/used-tv-buyer-dubai" element={<UsedTvBuyerDubai />} />
              <Route path="/used-tv-seller-dubai" element={<UsedTvSellerDubai />} />
              {/* Location-based service pages */}
              <Route path="/used-tv-buyer-:location" element={<LocationServicePage type="buyer" />} />
              <Route path="/used-tv-seller-:location" element={<LocationServicePage type="seller" />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
              <Route path="/trading-license" element={<TradingLicense />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
