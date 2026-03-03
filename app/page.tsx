import React from "react";
import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { ProcessShowcase } from "./components/ProcessShowcase";
// import { Projects } from "./components/Projects";
// import { Services } from "./components/Services";
// import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contacts";
import { Footer } from "./components/Footer";
import Logo from "./components/archadia";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center min-w-screen">
      {/* <Hero /> */}
      {/* <About />
      <ProcessShowcase />
      <Projects />
      <Services />
      <Testimonials />*/}
      {/* <Contact /> */}
      {/* <Footer /> */}
        <Logo/>
        <h2 className="tracking-widest text-slate-200"> coming soon</h2>
    </div>
  );
}
