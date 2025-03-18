import Images from "@/components/Images"
export default props => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  
  const sources = {
    tarjeta2: {
      "src": "/imagenes/footage-4/img-secondary-section04-asesoria-personalizada-card-chl-desktop-blhn-nov-01@2x.webp",
      "src_2x": "/imagenes/footage-4/img-secondary-section04-asesoria-personalizada-card-chl-desktop-blhn-nov-01@2x.webp",
      "alt": "Ejecutivos listos para que recibas atención preferencial",
      "title": "Ejecutivos listos para que recibas atención preferencial",
      "w": 550,
      "h": 550
    }
  }
  return <section className="section-3 pt-5">
    <article className="container-fluid">
      <div className="row align-items-center align-items-xl-center flex-md-row">
        <div className="col-12 col-md-5 pb-4 ps-0 pe-0">
          <h2 className="h2">¡Hazlo fácil! Llena el formulario y recibe asesoría</h2>
          <p className="pb-5 pt-1 p">
            Completa el formulario en minutos y recibe atención preferencial de uno de nuestros ejecutivos
          </p>
          <a href='https://www.lafise.com/blh/banca-personal/certificado-deposito/solicitud-en-linea' className="btnsection3">¡Quiero mi asesoría!</a>
        </div>
        <div className="col-12 col-md-6 text-center imag">
          <Images className="img-section-3 pb-0" alt="Tarjeta" source={sources} name="tarjeta2"/>
        </div>
      </div>
    </article>
  </section>
}