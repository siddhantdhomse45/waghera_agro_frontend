import React from "react";
import Hero from "../Components/Hero/Hero";
import Hotel from "../Components/HotelSection/Hotel";
import Facility from "../Components/Facility/Facility"
// import OurRooms from "../Components/OurRooms/OurRooms";
import ClientSay from "../Components/ClientSay/ClientSay";
// import VideoHeroSection from "../Components/VideoSection/VideoSection";
// import SpecialOffer from "../Components/Special Offer/SpecialOffer";
import FollowInstagram from "../Components/FollowInstagram/FollowInstagram";

export default function Home() {
  return (
    <div>
      <Hero />
      <Hotel/>
      <Facility/>
      {/* <SpecialOffer/> */}
      {/* <OurRooms/> */}
      <ClientSay/>
      {/* <VideoHeroSection/> */}
      
      <FollowInstagram/>
    </div>
  );
}
