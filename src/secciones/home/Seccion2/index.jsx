import React, { useState, useEffect } from 'react';
const Box = ({ icon_name, children }) => (
  <div className="d-flex flex-md-row flex-column align-content-md-center center-mobile-left-desktop mb-4">
    <div className="icon-container pe-3 ps-3">
      <i className={`icon ${icon_name}`} role="presentation"></i>
    </div>
    <div className="text-content">
      {children}
    </div>
  </div>
);

const Text = ({ title, content }) => (
  <div>
    <h3 className="h5 fw-600 pb-1">{title}</h3>
    {content}
  </div>
);

const CONTENTS = [
  {
    icon: "icon-n1",
    title: "Utiliza Bancanet",
    content: (
      <>
        Revisa desde tu celular como crecen tus&nbsp;<br/>ahorros
        
      </>
    ),
  },
  {
    icon: "icon-n4",
    title: (
      <>
        Disponible en la moneda que<br/> deseas
      </>
    ),
    content: (
      <>
        Solicítalo en lempiras o dólares
      </>
    ),
  },
  {
    icon: "icon-n3",
    title: (
      <>
        Intereses pagados directamente<br/> a tu cuenta
      </>
    ),
    content: (
      <>
        Cada vez que generas intereses, se suman&nbsp;<br/> a tu saldo
      </>
    ),
  },
  {
    icon: "icon-n2",
    title: "Accede a créditos",
    content: (
      <>
        Úsalo como garantía para obtener un<br/> Préstamo o Tarjeta de Crédito
      </>
    ),
  },
  {
    icon: "icon-n5",
    title: (
      <>
        Plazos adaptados a tus<br/> necesidades
      </>
    ),
    content: (
      <>
        desde 3, 6, 9 y 12 meses
      </>
    ),
  },
  {
    icon: "icon-n6",
    title: "Tasa de interés preferencial",
    content: (
      <>
        Disfruta de una tasa de interés más alta
      </>
    ),
  },
];

export default function MainComponent() {
  const [headerText, setHeaderText] = useState("Dale un impulso a tu experiencia con estos beneficios");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setHeaderText("Dale un impulso a tu experiencia con estos beneficios");
      } else {
        setHeaderText("Dale un impulso a tu experiencia con estos beneficios");
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="pt-5 pb-10 pt-md-10 pb-md-10 px-3" style={{ backgroundColor: '#ffffff' }}>
      <article className="container-fluid px-0">
        <div className="row pb-7">
          <div className="col-12">
          <h2 className="text-center">
          {headerText}
        </h2>
          </div>
        </div>

        <div className="row ps-md-8 ps-0 justify-md-content-center flex-column flex-md-row">
          {CONTENTS.map((item, index) => (
            <div key={index} className={`col-12 col-md-${index % 2 === 0 ? "9" : "10"} ps-4 pe-4 col-xl-6 order-${index + 1}`}>
              <Box icon_name={item.icon}>
                <Text title={item.title} content={item.content} />
              </Box>
            </div>
          ))}
        </div>

        {/* <div className="pt-4 pt-md-7 text-center">
          <a
            target="_blank"
            href="https://www.lafise.com/blh/cuenta-digital/abre-tu-cuenta-digital.html"
            className="mx-auto px-5 btn btn-primary  "
          >
            ¡Quiero mi tarjeta! 
          </a> */}

          
        {/* </article></div> */}
      </article>
    </section>
  );
}

 
