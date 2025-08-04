import React, { useEffect, useState } from "react";
const Banner = () => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  const [imageSrc, setImageSrc] = useState('/imagenes/banner-lg.webp');

  useEffect(() => {
    const updateImage = () => {
      if (window.matchMedia("(max-width: 577px)").matches) {
        setImageSrc(site_url + "/imagenes/banner-footage/BKG_BLHN_Banner_GRL_Seccion01_Cuenta_Horizonte_Desktop_Sep2024_01@1x.webp");
      } else if (window.matchMedia("(max-width: 992px)").matches) {
        setImageSrc(site_url + "/imagenes/banner-footage/BKG_BLHN_Banner_GRL_Seccion01_Cuenta_Horizonte_Desktop_Sep2024_01@1x.webp");
      } else {
        setImageSrc(site_url + "/imagenes/banner-footage/BKG_BLHN_Banner_GRL_Seccion01_Cuenta_Horizonte_Desktop_Sep2024_01@1x.webp");
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);
  return (
    <section className="hero-section position-relative">
      <div className="container">
        <div className="row">
          {/* Texto a la izquierda */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start pb-4 pt-5 pt-lg-0">
            <h1 className="banner-title text-gray">
              <span className="color1">Construye la vida que deseas, con tu</span>
              <span className="color2"> Cuenta Horizonte </span>
            </h1>
            <p className="banner-subheading text-gray">
              Garantiza tu bienestar a largo plazo, con una tasa de interés que te ayude a hacer crecer tu dinero
            </p>
            <a
              href="https://www.lafise.com/blh/banca-personal/cuenta-horizonte/solicitud-en-linea"
              className="btnsection3 ctahero btn-light btn-lg btn-cta btahero w-700p"
              style={{ fontWeight: '600' }}
            >
              ¡Solicítala ya!
            </a>
          </div>
  
          {/* Imagen visualmente fuera del grid, alineada a la derecha */}
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
