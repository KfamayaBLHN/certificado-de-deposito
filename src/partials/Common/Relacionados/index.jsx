import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ChicoBlog from './ChicoBlog';
import ChicaBlog from './ChicaBlog';
import ChicaBlog2 from './ChicaBlog2';
import Card1 from './beneficios/card1';
import Card2 from './beneficios/card2';
import Card3 from './beneficios/card3';
import Card4 from './beneficios/card4';
import Card5 from './beneficios/card5';
import Card6 from './beneficios/card6';

const Relacionados = (props) => {
  const backgroundColor = "bg-gray-1";
  return (
    <section className={`py-5 overflow-hidden`}>
      <div className="container-fluid">{props.children}</div>
    </section>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 576 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1
  }
};

const Item = (props) => {
  return (
    <div className="carousel-container h-100">
      <div className="h-100 px-2">
        {props.children}
      </div>
    </div>
  );
};

const Cards = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth <= 576) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Verificar al cargar y cada vez que la ventana cambie de tamaño
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="card-groud-n3">
      <article>
        {props.type === 'cards' && (
          <Carousel
            responsive={responsive}
            autoPlay={false}
            infinite={false}
            autoPlaySpeed={10000}
            showDots={isMobile} 
            hasArrows={true}
            isDesktopCarousel={false}
          >
            
            <Item>
              <ChicaBlog />
            </Item>
            <Item>
              <ChicaBlog2 />
            </Item>
            <Item>
              <ChicoBlog />
            </Item>
            
          </Carousel>
          
        )}

        {props.type === 'cards_beneficios' && (
          <Carousel
          responsive={responsive} autoPlay={false} infinite={true} autoPlaySpeed={3000} showDots={true}
          >
            <Item>
              <Card1 />
            </Item>
            <Item>
              <Card2 />
            </Item>
            <Item>
              <Card3 />
            </Item>
            <Item>
              <Card4 />
            </Item>
            <Item>
              <Card5 />
            </Item>
            <Item>
              <Card6 />
            </Item>
          </Carousel>
        )}
      </article>
    </div>
  );
};

const Title = (props) => {
  return (
    <div className="row textrow">
      <div className="col-12 pb-2">
        <h2 className="h2">{props.children}</h2>
      </div>
    </div>
  );
};

Relacionados.Title = Title;
Relacionados.Cards = Cards;

export default Relacionados;
