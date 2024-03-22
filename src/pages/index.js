import DiscussionForm from "@/components/DiscussionForm";
import Header from "@/components/Header";
import MarketStories from "@/components/MarketStories";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSidebar,setisSidebar] = useState(false);
  const sidebar = () => {
      setisSidebar(prev => !prev);
  }
  return (
    <div className="main w-full h-full flex max-md:flex-col" >
      <Header />
      <Sidebar sidebar={sidebar} isSidebar={isSidebar} />
      <DiscussionForm sidebar={sidebar} isSidebar={isSidebar} />
      <MarketStories isSidebar={isSidebar}/>
   </div>
  );
}
