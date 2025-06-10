import Images from "@/components/Images";

export default props => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;

  const sources = {
    tarjeta2: {
      src: "/imagenes/footage-4/img-secondary-section04-asesoria-personalizada-card-chl-desktop-blhn-nov-01@2x.webp",
      src_2x: "/imagenes/footage-4/img-secondary-section04-asesoria-personalizada-card-chl-tablet-blhn-may-01-2x.webp", 
      alt: "Ejecutivos listos para que recibas atención preferencial",
      title: "Ejecutivos listos para que recibas atención preferencial",
      w: 550,
      h: 550
    }
  };

  return (
    <section className="section-3" style={{ paddingTop: "48px", paddingBottom: "0" }}>
      <article className="container-fluid">
        <div className="row align-items-end align-items-xl-start flex-md-row">
          {/* Columna de texto */}
          <div className="col-12 col-md-5 ps-0 pe-0 divul">
            <h2 className="h2">¡Hazlo fácil! Llena el formulario ya</h2>
            <p className="p">
              Completa el formulario en minutos y recibe atención preferencial de uno de nuestros ejecutivos
            </p>
            <div className="divBtn">
              <a
                href="https://www.lafise.com/blh/banca-personal/certificado-deposito/solicitud-en-linea"
                className="btnsection3"
              >
                ¡Quiero mi asesoría!
              </a>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className=" divBtn col-12 col-md-5 d-flex justify-content-center align-items-end " style={{ paddingBottom: "0px" }}>
            <Images
              className="img-section-3"
              alt="Tarjeta"
              source={sources}
              name="tarjeta2"
              style={{
                objectFit: "contain",
                maxHeight: "100%",
                width: "100%",
                height: "auto"
              }}
            />
          </div>
        </div>
      </article>
    </section>
  );
};
