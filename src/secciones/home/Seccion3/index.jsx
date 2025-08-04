import Images from "@/components/Images";

export default props => {
  const sources = {
    ImagenSeccion3: {
      src: "/imagenes/seccion_extra/mujer/img-secondary-se-chl-mujer-blhn-grl-01-2x.webp",
      src_2x: "/imagenes/seccion_extra/mujer/img-secondary-se-chl-mujer-blhn-grl-01-2x.webp",
      alt: "Mujer alegre revisando los requisitos para aperturar su depósito a plazo fijo",
      title: "Mujer alegre revisando los requisitos para aperturar su depósito a plazo fijo",
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
        <div className="row gx-0 flex-column-reverse flex-md-row h-100">

          {/* Imagen */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-end">
            <Images
              className="img-fluid object-fit-contain"
              source={sources}
              name="ImagenSeccion3"
            />
          </div>

          {/* Texto */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center ps-4 pe-4 text-white">
            <h2 className="h2 mb-3">
              Abre tu cuenta <span className="text-success">Horizonte Life</span><br />
              y disfruta de los beneficios:
            </h2>

            <div className="d-flex flex-column flex-lg-row movilCenter gap-4 mb-4">
              <img
                src="/imagenes/seccion_extra/iconos/icn-content-se-bono-vector-blhn-01.svg"
                alt="Icono bono"
                style={{ width: '200px', height: 'auto' }}
              />
              <img
                src="/imagenes/seccion_extra/iconos/icn-content-se-tasa-vector-blhn-01.svg"
                alt="Icono interés"
                style={{ width: '200px', height: 'auto' }}
              />
            </div>

            <a href="#formulario" className="btnsectionextra btn-light btn-cta">
              ¡Comienza ya!
            </a>
          </div>

        </div>
      </article>
    </section>
  );
};
