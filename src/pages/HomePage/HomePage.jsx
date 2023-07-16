import React from "react";
import Header from "../../Components/Header/Header";
import ListMovie from "./ListMovie/ListMovie";
import TabsMovie from "./TabsMovie/TabsMovie";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="space-y-5">
      
      <Header />
      <Banner />
      <ListMovie />
      <div style={{height:"500px", overflow:"auto", width:"99%"}}>
        <TabsMovie />
      </div>
      
      <Footer />
    </div>
  );
}
