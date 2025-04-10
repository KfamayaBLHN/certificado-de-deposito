import React from "react";
import Hero from "@/components/Hero";

const Banner = () => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <Hero className="hero-home" site_url={site_url}>
      <div className="hero-content">
        <div className="LeftColumn">
          <h1 className="text-white">
            <span>Transforma tus ahorros con tu Certificado de Depósito</span>
          </h1>
          <div className="">
            <p className="h4 text-white pt-1 fw-normal">
              Garantiza tu bienestar a largo plazo, con una tasa de interés
              que te ayude a hacer crecer tu dinero
            </p>
          </div>
          <div>
          <a href='https://www.lafise.com/blh/banca-personal/certificado-deposito/solicitud-en-linea' className="btn btn-light btn-lg mt-3">¡Obtenlo ya!</a>
          </div>
        </div>
        <div className="RightColumn">
          <img src='/imagenes/banner-footage/bkg-blhn-banner-grl-seccion01-certificado-deposito-desktop-031124-01@1x.webp' />
        </div>
      </div>

      {/* <div className="d-sm-block d-md-none">
          <p className="h4 text-white pt-1 fw-normal">
            Garantiza tu bienestar a largo plazo, con una tasa de interés que te ayude a hacer crecer tu dinero
          </p>
          <a href='https://www.lafise.com/blh/banca-personal/certificado-deposito/solicitud-en-linea' className="btn btn-light btn-lg mt-3">¡Obtenlo ya!</a>
        </div> */}

    </Hero>
  );
};

export default Banner;
