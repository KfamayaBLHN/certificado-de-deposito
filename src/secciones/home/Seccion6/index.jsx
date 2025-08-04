import Images from "@/components/Images";

export default props => {
  const sources = {
    ImagenSeccion6: {
      src: "/imagenes/pics/IMG-secondary_Requisitos_BLH-Section5_Desktop_01@1x.webp",
      src_2x: "/imagenes/pics/IMG-secondary_Requisitos_BLH-Section5_Desktop_01@2x.webp",
      alt: "Ejecutivo leyendo en su celular los requisitos para aperturar su Cuenta Horizonte",
      title: "Ejecutivo leyendo en su celular los requisitos para aperturar su Cuenta Horizonte",
      w: 500,
      h: 500
    }
  };

  return (
    <section
      className="section-6 d-flex flex-column justify-content-center"
      id="requisitos"
      style={{
        height: 'auto',
        minHeight: '385px'
      }}
    >
      <article className="container-fluid h-100">
      <div className="row gx-0 flex-md-row h-100">

        {/* Texto */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-start divMejor">
        <h2 className="h2">Requisitos para abrir tu Cuenta Horizonte</h2>
          <ul className="list-unstyled list-bullet-check mb-0 pb-4">
            <li>DNI o pasaporte vigente</li>
            <li>Carnet de residencia, en caso de ser extranjero</li>
            <li>Apertura desde L15,000 o $700</li>
          </ul>
          <a href='https://www.lafise.com/blh/banca-personal/cuenta-horizonte/solicitud-en-linea' 
            className="btnsection6 btn-light btn-cta mb-5"
            style={{ fontWeight: '600' }}>¡Quiero mi cuenta!</a>
        </div>

        {/* Imagen */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-end">
          <Images
            className="img-fluid object-fit-contain"
            source={sources}
            name="ImagenSeccion6"
          />
        </div>

      </div>
      </article>
    </section>
  );
};
