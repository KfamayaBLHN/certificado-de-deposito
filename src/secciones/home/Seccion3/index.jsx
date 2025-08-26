import Images from "@/components/Images";

export default props => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  const sources = {
    ImagenSeccion3: {
      src: "/imagenes/seccion_extra/mujer/img-secondary-se-chl-mujer-blhn-grl-01-2x.webp",
      src_2x: "/imagenes/seccion_extra/mujer/img-secondary-se-chl-mujer-blhn-grl-01-2x.webp",
      alt: "Mujer alegre revisando los requisitos para aperturar su cuenta horizonte life",
      title: "Mujer alegre revisando los requisitos para aperturar su cuenta horizonte life",
      w: 500,
      h: 500
    }
  };

  return (
    <section
      className="section-3 d-flex flex-column justify-content-center"
      id="requisitos"
      style={{
        height: 'auto',
        minHeight: '385px'
      }}
    >
      <article className="container-fluid h-100">
        <div className="row gx-0 flex-column-reverse flex-md-row h-100 section-3-content">

          {/* Imagen */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-end">
            <Images
              className="img-fluid object-fit-contain"
              source={sources}
              name="ImagenSeccion3"
            />
          </div>

          {/* Texto */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center ps-2 pe-2 text-white movilDiv">
            {/* Tablet -desktop */}
            <h2 className="h2 d-none d-lg-block">
              Abre tu cuenta <span className="text-success">Horizonte Life </span><br />
              y disfruta de los beneficios:
            </h2>
            {/* Movil */}
            <h2 className="h2 d-md-block d-lg-none">
              Abre tu cuenta<br /> <span className="text-success">Horizonte Life </span><br />
              y disfruta de los beneficios:
            </h2>

            <div className="d-flex flex-column flex-lg-row movilCenter gap-4">
              <img
                src={`${site_url}/imagenes/seccion_extra/iconos/icn-content-se-bono-vector-blhn-02.svg`}
                alt="Icono bono"
                title="Bono de bienvenida"
                style={{ width: '200px', height: 'auto' }}
                className="img-bono-bienvenida"
              />
              <img
                src={`${site_url}/imagenes/seccion_extra/iconos/icn-content-se-tasa-vector-blhn-03.svg`}
                alt="Icono interés"
                title="Tasa de interés"
                style={{ width: '200px', height: 'auto' }}
              />
            </div>

            <a href="https://www.lafise.com/blh/banca-personal/cuenta-horizonte-life/solicitud-en-linea" className="btnsectionextra btn-light btn-cta" title="Solicita tu Cuenta Horizonte Life">
              ¡Comienza ya!
            </a>
          </div>

        </div>
      </article>
    </section>
  );
};
