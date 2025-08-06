import React from "react";
import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { ProcessShowcase } from "./components/ProcessShowcase";
// import { Projects } from "./components/Projects";
// import { Services } from "./components/Services";
// import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contacts";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <About />
      <ProcessShowcase />
      <Projects />
      <Services />
      <Testimonials />*/}
      <Contact />
      <Footer />
    </div>
  );
}
