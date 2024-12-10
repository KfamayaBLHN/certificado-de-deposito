import Images from "@/components/Images"
export default props => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  
  const sources = {
    tarjeta2: {
      "src": "/imagenes/footage-4/IMG_Secondary_seciton03_Couple_Card_CAA_Desktop_BLHN_Sep_02@1x.webp",
      "src_2x": "/imagenes/footage-4/IMG_Secondary_seciton03_Couple_Card_CAA_Desktop_BLHN_Sep_02@2x.webp",
      "alt": "Pareja utilizando Tarjeta de Débito Virtual para compras en línea",
      "title": "",
      "w": 550,
      "h": 550
    }
  }
  return <section className="section-3 pt-3 pb-3">
    <article className="container-fluid">
      <div className="row align-items-center align-items-xl-center flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 text-center imag">
          <Images className="img-section-3" alt="Tarjeta" source={sources} name="tarjeta2"/>
        </div>
        <div className="col-12 col-md-5 p-3">
          <h2 className="h2">La libertad de pagar en línea</h2>
          <p className="pb-5 pt-1 p">
            Recibe tu Tarjeta de Débito Virtual por correo electrónico y
            compra en línea desde el primer día 
          </p>
          <a href='https://www.lafise.com/blh' className="btnsection3">¡Solicítala hoy!</a>
        </div>
      </div>
    </article>
  </section>
}