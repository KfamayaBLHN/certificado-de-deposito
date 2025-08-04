"use client"
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Breadcrumbs from '@/secciones/home/Breadcrumbs';
import Hero from '@/secciones/home/Hero';
import Seccion2 from '@/secciones/home/Seccion2'
import Seccion3 from '@/secciones/home/Seccion3';
import Seccion4 from '@/secciones/home/Seccion4'
import Seccion5 from '@/secciones/home/Seccion5';
import Seccion6 from '@/secciones/home/Seccion6'
import Seccion7 from '@/secciones/home/Seccion7'

export default function Home() {
  const env = process.env.NODE_ENV;
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 1199px)' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Renderiza un componente vacío o alguna versión predeterminada mientras se monta en el cliente
    return null;
  }

  return (
    <>
      {env !== 'development' && (<div dangerouslySetInnerHTML={{ __html: '<!--#include virtual="/cdn/basics/header-banco/v3.0/header-blh.html" -->' }}></div>)}
      <main>
        <Hero />
        <Breadcrumbs/>
        {/* {isMobile ? <Seccion7 /> : <Seccion2 />} */}
        <Seccion2 />
        <Seccion3 /> 
        <Seccion4 />
        <Seccion5 />
        <Seccion6 /> 
        <Seccion7 />
      </main>
      {env !== 'development' && (<div dangerouslySetInnerHTML={{ __html: '<!--#include virtual="/cdn/basics/footer-banco/v3.0/footer-blh.html" -->' }}></div>)}
    </>
  )
}
