import React from "react";
import Hero from "@/components/Hero";

const Banner = () => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <Hero className="hero-home" site_url={site_url}>
      <h1 className="text-gray">
      <span className="colorTitle1">Alcanzar tus metas es fácil con tu</span><span className="colorTitle2"> Cuenta Ahorro Avanza </span>
      </h1>
      <div className="d-none d-md-block">
        <p className="h4 text-gray pt-1 fw-normal">
          Da el primer paso para cumplir tus sueños,&nbsp;<br/>
          solicítala en lempiras y dólares de manera rápida y segura 
        </p>
        <a href='https://www.lafise.com/blh' className="btn btn-light btn-lg mt-3">¡Abrir mi cuenta!</a>
      </div>
      <div className="d-sm-block d-md-none">
        <p className="h4 text-gray pt-1 fw-normal">
          Da el primer paso para cumplir tus sueños, solicítala en lempiras y dólares de manera rápida y segura 
        </p>
        <a href='https://www.lafise.com/blh' className="btn btn-light btn-lg mt-3">¡Abrir mi cuenta!</a>
      </div>
    </Hero>
  );
};

export default Banner;
