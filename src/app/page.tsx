"use client";

import React from "react";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Fiddely from "@/components/Fiddely";
import ArcanAgency from "@/components/ArcanAgency";
import Mediatic from "@/components/Mediatic";
import Servicios from "@/components/Servicios";
import Clientes from "@/components/Clientes";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="space-y-16 md:space-y-20">
        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Nosotros />
        </div>

        {/* Companies Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="space-y-20">
              <Fiddely />
              <ArcanAgency />
              <Mediatic />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Servicios />
        </div>

        {/* Clients Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Clientes />
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Contacto />
        </div>
      </div>
    </div>
  );
}
