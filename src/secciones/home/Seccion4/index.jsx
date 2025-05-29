import Images from "@/components/Images";

export default props => {
  const sources = {
    ChicoSeccion4: {
      src: "/imagenes/pics/img-secondary-requisitos-blhn-section3-desktop-01@2x.webp",
      src_2x: "/imagenes/pics/img-secondary-requisitos-blhn-section3-mobile-01@2x.webp",
      alt: "Mujer alegre revisando los requisitos para aperturar su depósito a plazo fijo",
      title: "Mujer alegre revisando los requisitos para aperturar su depósito a plazo fijo",
      w: 500,
      h: 500
    }
  };

  return (
    <section
      className="section-4 d-flex flex-column justify-content-center"
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
              name="ChicoSeccion4"
            />

          </div>

          {/* Texto */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-start ps-4 pe-4">
            <h2 className="h2">
              Esto necesitarás para la apertura de tu Depósito a plazo fijo
            </h2>
            <ul className="list-unstyled list-bullet-check mb-0 pb-5 mt-0">
              <li>DNI</li>
              <li>RTN</li>
              <li>Pasaporte o carnet de residencia, en caso de ser extranjero</li>
              <li>Apertura desde L 10,000</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};
