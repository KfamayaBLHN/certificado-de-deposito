import React from "react";
import Accordion from "@/components/Accordion"

export default props => {
  return <section className="section-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-md-center">
          <h2 className="h2 pb-5">¿Dudas? Estamos aquí para ayudarte</h2>
        </div>
      </div>
        
      <div className="questions">
      <div className="row">
        <div className="col-12 col-md-10">
        <Accordion>

            <Accordion.Item class="title" label="¿Puedo realizar gestiones en las agencias si tengo la Cuenta Ahorro Avanza?" index={0}>
            <p>Sí, puedes visitar nuestras agencias y realizar las gestiones que necesites. Sin embargo, te recomendamos que uses Bancanet, nuestra banca electrónica, para hacer tus trámites en línea, desde tu celular o en computadora.</p>
            </Accordion.Item>

            <Accordion.Item label="¿Cómo obtengo mi Tarjeta de Débito Virtual y cómo funciona?" index={1}>
              <p>Para obtener tu Tarjeta de Débito Virtual, realiza tu primer depósito en la cuenta. 
                Recibirás los datos por correo electrónico, los cuales estarán disponible 24 horas, para que puedas guárdalos. 
                Luego, podrás usarla para hacer compras en línea.</p>
            </Accordion.Item>

            <Accordion.Item label="¿En qué dirección me entregarán mi Tarjeta de Débito?" index={2}>
              <p>Tu Tarjeta de Débito será entregada en la dirección que brindaste al llenar el formulario, 
                por lo cual asegúrate de que sea exacta y precisa, para que la recibas en persona.</p>
            </Accordion.Item>

            <Accordion.Item label="¿Puedo hacer transferencia a otros bancos?" index={3}>
              <p>Sí, por medio de Bancanet puedes hacer transferencias a cualquier banco local por ACH o a cuentas LAFISE.</p>
            </Accordion.Item>
        
          </Accordion>
        </div>
      </div>
    </div>
    </div>
  </section>
}