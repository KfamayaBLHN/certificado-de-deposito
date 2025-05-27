import Images from "@/components/Images";
import React, { useEffect, useState } from "react";
const Banner = () => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  const [imageSrc, setImageSrc] = useState('/imagenes/banner-lg.webp');

  useEffect(() => {
    const updateImage = () => {
       if (window.matchMedia("(max-width: 577px)").matches) {
        setImageSrc(site_url + "/imagenes/banner-footage/bkg-blhn-banner-grl-seccion01-certificado-deposito-mobile-031124-01@1x.webp");
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setImageSrc(site_url + "/imagenes/banner-footage/bkg-blhn-banner-grl-seccion01-Certificado-deposito-tablet-190525-01-2x.webp");
      } else if (window.matchMedia("(max-width: 991px)").matches) {
        setImageSrc(site_url + "/imagenes/banner-footage/bkg-blhn-banner-grl-seccion01-certificado-deposito-desktop-031124-01@2x.webp");
      } else {
        setImageSrc(site_url + "/imagenes/banner-footage/bkg-blhn-banner-grl-seccion01-certificado-deposito-desktop-031124-01@2x.webp");
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);
  return (
    <section className="hero-section bg-success " >
      <div className="container h-100">
        <div className="row h-100">
          {/* Texto a la izquierda */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start" >
            <h1 className="banner-title text-white">
              Transforma tus ahorros con tu Certificado de Depósito
            </h1>
            <p className="banner-subheading text-white">
              Garantiza tu bienestar a largo plazo, con una tasa de interés que te ayude a hacer crecer tu dinero
            </p>
            <a
              href="https://www.lafise.com/blh/banca-personal/certificado-deposito/solicitud-en-linea"
              className="btn btn-light btn-lg btn-cta h-600p"
            >
              ¡Obtenlo ya!

            </a>

          </div>

          {/* Imagen a la derecha */}
          <div className="col-12 col-lg-6 p-0">
            <div className="h-100 d-flex align-items-end justify-content-center">
              <img
                src={imageSrc}
                alt="Certificado de Depósito"
                className="img-fluid banner-image"
                style={{ maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
