import React from "react";
import { Button } from "./ui/button";
import { ArchadiaLogo } from "./Logo3";
import { Lato } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Architectural wireframe background */}
      {/* <WireframeBg className="text-slate-400 opacity-20" /> */}

      {/* Navigation */}
      <nav className="relative z-10 p-6 md:p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* <Logo size="md" /> */}
          <div className="flex items-center p-4">
            <ArchadiaLogo className="w-full max-w-[400px] mx-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#services"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
          </div>
          <Button
            variant="outline"
            className="border-slate-300 hover:bg-slate-100 hover:text-slate-800"
          >
            Book Consultation
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 relative">
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
          <div className="max-w-4xl mx-auto text-center text-slate-900">
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
              <span className={lato.className}>Elevating Spaces,</span>
              <br />
              <span className="text-4xl md:text-6xl font-light italic text-slate-600">
                <span className={lato.className}>Designing Experiences</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              <span className={lato.className}>
                Luxury interior design and architectural finishing tailored to
                your vision
              </span>
            </p>
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 text-lg cursor-pointer"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
