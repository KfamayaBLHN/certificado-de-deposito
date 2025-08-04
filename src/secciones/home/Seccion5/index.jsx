import Images from "@/components/Images";

export default props => {
  const sources = {
    ImagenSeccion5: {
      src: "/imagenes/pics/IMG-secondary-_Asesores_BLH-Section4_Desktop_01@1x.webp",
      src_2x: "/imagenes/pics/IMG-secondary-_Asesores_BLH-Section4_Desktop_01@2x.webp",
      alt: "Nuestros asesores listos para dar una atención personalizada",
      title: "Asesores listos para atenderte",
      w: 500,
      h: 500
    }
  };

  return (
    <section
      className="section-5 d-flex flex-column justify-content-center"
      id="requisitos"
      style={{
        height: 'auto',
        minHeight: '360px'
      }}
    >
      <article className="container-fluid h-100">
      <div className="row gx-0 flex-md-row h-100">

        {/* Imagen */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-end divMejor">
          <Images
            className="img-fluid object-fit-contain"
            source={sources}
            name="ImagenSeccion5"
          />
        </div>

        {/* Texto */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center ps-2 pe-2">
          <h2 className="h2">Recibe atención personalizada</h2>
          <p className="pb-1 pt-1 p">
            Llena tus datos en el formulario y uno de nuestros 
            agentes se comunicará contigo para asesorarte en el proceso de apertura
          </p>
        </div>
          
        </div>
      </article>
    </section>
  );
};
