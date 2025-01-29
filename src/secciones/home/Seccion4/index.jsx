import Images from "@/components/Images"

export default props => {

  const sources = {
    ChicoSeccion4: {
      "src": "/imagenes/pics/img-secondary-requisitos-blhn-section3-desktop-01@2x.webp",
      "src_2x": "/imagenes/pics/img-secondary-requisitos-blhn-section3-mobile-01@2x.webp",
      "alt": "Joven revisando los requisitos desde su celular para la apertura de su Cuenta Avanza",
      "title": "",
      "w": 500,
      "h": 500
    }
  }
  return <section className="section-4" id="requisitos" style={{background: "#ffffff"}}>
    <article className="container-fluid">
      <div className="row align-items-end align-items-xl-center flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 text-center imag">
          <Images className="img-section-4" alt="Joven revisando los requisitos desde su celular para la apertura de su Cuenta Avanza" source={sources} name="ChicoSeccion4"/>
        </div>
        <div className="col-12 col-md-5 p-0">
          <h2 className="h2">Esto necesitarás para la apertura de tu Depósito a plazo fijo</h2>
          <ul className="list-unstyled list-bullet-check mb-0">
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