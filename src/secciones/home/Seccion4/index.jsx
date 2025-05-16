import Images from "@/components/Images"

export default props => {

  const sources = {
    ChicoSeccion4: {
      "src": "/imagenes/pics/img-secondary-requisitos-blhn-section3-desktop-01@2x.webp",
      "src_2x": "/imagenes/pics/img-secondary-requisitos-blhn-section3-mobile-01@2x.webp",
      "alt": "Mujer alegre revisando los requisitos para aperturar su depósito a plazo fijo",
      "title": "Mujer alegre revisando los requisitos para aperturar su depósito a plazo fijo",
      "w": 500,
      "h": 500
    }
  }
  return <section className="section-4 d-flex flex-column " id="requisitos">
    <article className="container-fluid d-flex flex-column flex-grow-1">
      <div className="row flex-column-reverse flex-md-row flex-grow-1 justify-content-between">

        <div className="col-12 col-md-6 text-center imag d-flex justify-content-center">
          <Images className="img-section-4 align-self-end" source={sources} name="ChicoSeccion4" />
        </div>

        <div className="col-12 col-md-5 ps-3 pe-3 pt-5 d-flex flex-column justify-content-start">
          <h2 className="h2 pt-3">Esto necesitarás para la apertura de tu Depósito a plazo fijo</h2>
          <ul className="list-unstyled list-bullet-check mb-0 pb-5">
            <li>DNI</li>
            <li>RTN</li>
            <li>Pasaporte o carnet de residencia, en caso de ser extranjero</li>
            <li>Apertura desde L 10,000</li>
          </ul>
        </div>



      </div>
    </article>
  </section>

}