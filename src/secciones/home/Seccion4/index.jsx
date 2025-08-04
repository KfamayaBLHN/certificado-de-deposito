import Images from "@/components/Images";

export default props => {
  const sources = {
    ImagenSeccion4: {
      src: "/imagenes/footage-4/IMG_Secondary_Section03_Family_Card_CH_Desktop_BLHN_Sep_01@1x.webp",
      src_2x: "/imagenes/footage-4/IMG_Secondary_Section03_Family_Card_CH_Desktop_BLHN_Sep_01@2x.webp",
      alt: "Familia acumulando doble punto por sus compras utilizando su Tarjeta de Débito Dorada",
      title: "Acumula doble punto por sus compras",
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
      <div className="row gx-0  flex-md-row h-100">

        {/* Texto */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-start divMejor">
          <h2 className="h2">Doble punto con tu Tarjeta de Débito Dorada</h2>
          <p className="pb-5 pt-1 p">
            Diseñada para que disfrutes de recompensas increíbles, 
            al acumular doble punto por cada dólar de consumo
          </p>
          <a href='https://www.lafise.com/blh/banca-personal/cuenta-horizonte/solicitud-en-linea' className="btnsection4 btn-light btn-cta"
              style={{ fontWeight: '600' }}>¡Descúbrela aquí!</a>
        </div>

        {/* Imagen */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-end">
          <Images
            className="img-fluid object-fit-contain"
            source={sources}
            name="ImagenSeccion4"
          />
        </div>
          
        </div>
      </article>
    </section>
  );
};
