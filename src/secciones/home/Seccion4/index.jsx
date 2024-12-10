import Images from "@/components/Images"

export default props => {

  const sources = {
    ChicoSeccion4: {
      "src": "/imagenes/pics/IMG_Secondary_seciton04_Lady_Phone_CAA_Desktop_BLHN_01@1x.webp",
      "src_2x": "/imagenes/pics/IMG_Secondary_seciton04_Lady_Phone_CAA_Desktop_BLHN_01@2x.webp",
      "alt": "Joven revisando los requisitos desde su celular para la apertura de su Cuenta Avanza",
      "title": "",
      "w": 500,
      "h": 500
    }
  }
  return <section className="section-4 pt-4" id="requisitos">
    <article className="container-fluid">
      <div className="row align-items-end align-items-xl-center flex-md-row">
        <div className="col-12 col-md-5">
          <h2 className="h2">Requisitos para abrir tu Cuenta Ahorro Avanza</h2>
          <ul className="list-unstyled list-bullet-check mb-0">
            <li>Correo electrónico válido</li>
            <li>DNI o pasaporte hondureño vigente</li>
            <li>Carnet de residencia, en caso de ser extranjero</li>
            <li>Ser mayor de 18 años</li>
            <li>Apertura desde L1,000 o $100</li>
          </ul>
        </div>
        <div className="col-12 col-md-5 text-center imag">
          <Images className="img-section-4" alt="Joven revisando los requisitos desde su celular para la apertura de su Cuenta Avanza" source={sources} name="ChicoSeccion4"/>
        </div>
      </div>
    </article>
  </section>
}