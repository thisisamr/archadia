import React from "react";
import { Logo } from "./Logo";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="full" className="mb-6 text-white" />
            <p className="text-slate-400 mb-6 leading-relaxed">
              Elevating spaces through innovative design and architectural
              excellence. Creating timeless environments that inspire and
              endure.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Architectural Finishing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  3D Visualization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Design Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Awards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-6">Contact</h3>
            <div className="space-y-3 text-slate-400">
              <p>
                125 Design District
                <br />
                New York, NY 10001
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:5551234567"
                  className="hover:text-white transition-colors"
                >
                  (555) 123-4567
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:hello@archadia.design"
                  className="hover:text-white transition-colors"
                >
                  hello@archadia.design
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Archadia Design Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
