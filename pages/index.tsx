import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import WelcomeContainer from "../components/welcome-container";
import LocationContainer from "../components/location-container";
import MenuContainer from "../components/menu-container";
import DiscoverSection from "../components/discover-section";
import ClientTestimonialContainer from "../components/client-testimonial-container";
import BookTableContainer from "../components/book-table-container";
import AddressContainer from "../components/address-container";
import FAQSection from "../components/f-a-q-section";
import GeoLocationContainer from "../components/geo-location-container";

const RestaurantTemplate1: NextPage = () => {
  return (
    <div className="relative w-full h-[7033px] flex flex-col items-center justify-start">
      <Header />
      <WelcomeContainer />
      <LocationContainer />
      <MenuContainer />
      <DiscoverSection />
      <ClientTestimonialContainer />
      <BookTableContainer />
      <AddressContainer />
      <FAQSection />
      <GeoLocationContainer />
    </div>
  );
};

export default RestaurantTemplate1;
