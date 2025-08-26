import React, { useEffect, useState } from "react";
const Banner = () => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  const [imageSrc, setImageSrc] = useState('/imagenes/banner-footage/hero-image/bkg-blhn-banner-grl-seccion01-cuenta-horizonte-tablet-ago2025-01-2x.webp');

  useEffect(() => {
    const updateImage = () => {
      if (window.matchMedia("(max-width: 577px)").matches) {
        setImageSrc(site_url + "/imagenes/banner-footage/BKG_BLHN_Banner_GRL_Seccion01_Cuenta_Horizonte_Mobile_Sep2024_01@2x.webp");
      } else if (window.matchMedia("(max-width: 992px)").matches) {
        setImageSrc(site_url + "/imagenes/banner-footage/hero-image/bkg-blhn-banner-grl-seccion01-cuenta-horizonte-tablet-ago2025-01-2x.webp");
      } else {
        setImageSrc(site_url + "/imagenes/banner-footage/hero-image/bkg-blhn-banner-grl-seccion01-cuenta-horizonte-desktop-ago2025-01-2x.webp");
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
          <div className="herodiv col-12 col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start pt-lg-0">
            <h1 className="banner-title text-gray">
              <span className="color1">Construye la vida que deseas, con tu</span>
              <span className="color2"> Cuenta Horizonte </span>
            </h1>
            <p className="banner-subheading text-gray">
              Ahorra con una tasa de interés atractiva y beneficios exclusivos, para que comiences a formar tu futuro hoy
            </p>
            <a
              href="https://www.lafise.com/blh/banca-personal/cuenta-horizonte/solicitud-en-linea"
              title="Solicitud en linea de cuenta horizonte"
              className="btnsection3 ctahero btn-light btn-lg btn-cta btahero w-700p"
              style={{ fontWeight: '600' }}
            >
              ¡Solicítala ya!
            </a>
          </div>
  
          {/* Imagen visualmente fuera del grid, alineada a la derecha */}
          <div className="col-12 col-lg-6 p-0">
            <div className="h-100 d-flex align-items-end justify-content-center hero-image-container">
              <img
                src={imageSrc}
                alt="Cuenta Horizonte - LAFISE Honduras"
                title="Cuenta Horizonte - LAFISE Honduras"
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
