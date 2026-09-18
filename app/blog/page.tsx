"use client"

import { setupIntersectionObserver } from "@/app/utils/animation";
import { useEffect } from "react";

import { Code, Eye, Globe, Lock, PenTool, Shield } from "lucide-react";
import Blog from "@/_components/Blog";



export default function page() {
  useEffect(()=>{
  setupIntersectionObserver();
  },[])
  return (
  
   
      <main className="flex-grow py-10">
        <Blog />
      </main>
   
   
  );
}