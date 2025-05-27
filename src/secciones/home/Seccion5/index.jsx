import React from "react";
import Accordion from "@/components/Accordion"

export default props => {
  return <section className="section-5">
    <div className="container-fluid">
      <div className="row qs">
        <div className="col-12 text-md-center">
          <h2 className="h2 pb-1 justify-content-center text-center" >Resuelve tus dudas</h2>
          <p className="p pt-1">Todo lo que necesitas saber sobre tu certificado</p>
        </div>
      </div>
        
      <div className="questions">
      <div className="row">
        <div className="col-12 col-md-10">
        <Accordion>

            <Accordion.Item class="title" label="¿Qué es un Certificado de Depósito?" index={0}>
            <p>Un Certificado de Depósito es una forma de ahorrar, donde guardas tu dinero por plazos de 3, 6, 9 y 12 meses, según tu conveniencia. 
              Durante ese tiempo, recibes una tasa de interés preferencial, que te brinda rentabilidad y seguridad.</p>
            </Accordion.Item>

            <Accordion.Item label="¿En qué moneda está disponible el Certificado de Depósito?" index={1}>
              <p>El Certificado de Depósito está disponible en la moneda que deseas, ya sea en lempiras o dólares.</p>
            </Accordion.Item>

            <Accordion.Item label="¿En qué consiste acceder a créditos utilizando un Certificado de Depósito como garantía?" index={2}>
              <p>Acceder a un Préstamo o Tarjeta de Crédito utilizando un Certificado de Depósito como respaldo, 
                significa que puedes obtener financiamiento sin tener que retirar tus ahorros. </p>
            </Accordion.Item>

            <Accordion.Item label="¿En caso de cancelación anticipada del Certificado de Depósito, hay penalizaciones?" index={3}>
              <p>Sí, en caso de cancelar antes de tiempo tu Certificado de Depósito, tendrás una penalización del 2% en lempiras y 1% en dólares, 
                el plazo será los días que faltan para llegar a la fecha de vencimiento.</p>
            </Accordion.Item>
            
            <Accordion.Item label="¿Qué necesito para obtener un Certificado de Depósito?" index={4}>
              <p>Para abrir un Certificado de Depósito puedes visitar cualquiera de nuestras agencias y presentar tu documento de identificación, 
                RTN y pasaporte o carnet de residencia vigente en caso de ser extranjero.</p>
            </Accordion.Item>
        
          </Accordion>
        </div>
      </div>
    </div>
    </div>
  </section>
}