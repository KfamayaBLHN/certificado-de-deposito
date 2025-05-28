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
        Revisa desde tu celular como crecen tus&nbsp;<br />ahorros

      </>
    ),
  },
  {
    icon: "icon-n4",
    title: (
      <>
        Disponible en la moneda que<br /> deseas
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
        Intereses pagados directamente<br /> a tu cuenta
      </>
    ),
    content: (
      <>
        Cada vez que generas intereses, se suman&nbsp;<br /> a tu saldo
      </>
    ),
  },
  {
    icon: "icon-n2",
    title: "Accede a créditos",
    content: (
      <>
        Úsalo como garantía para obtener un<br /> Préstamo o Tarjeta de Crédito
      </>
    ),
  },
  {
    icon: "icon-n5",
    title: (
      <>
        Plazos adaptados a tus<br /> necesidades
      </>
    ),
    content: (
      <>
        Desde 3, 6, 9 y 12 meses
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
  const [headerText, setHeaderText] = useState("Dale un impulso a tu experiencia con estos beneficio");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setHeaderText("Dale un impulso a tu experiencia con estos beneficio");
      } else {
        setHeaderText("Dale un impulso a tu experiencia con estos beneficio");
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="seccion7 px-3" style={{ backgroundColor: '#ffffff' }}>
      <article className="container-fluid px-0">
        <div className="row pb-2">
          <div className="col-12">
            <h2 className="text-center">
              {headerText}
            </h2>
          </div>
        </div>

        <div className="row justify-content-center pt-5">
          {CONTENTS.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-xl-5 px-3 mb-4">
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


