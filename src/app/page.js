"use client"
import { useMediaQuery } from 'react-responsive';
import Breadcrumbs from '@/secciones/home/Breadcrumbs';
import Hero from '@/secciones/home/Hero';
import Seccion2 from '@/secciones/home/Seccion2'
import Seccion3 from '@/secciones/home/Seccion3'
import Seccion4 from '@/secciones/home/Seccion4'
import Seccion5 from '@/secciones/home/Seccion5'

export default function Home() {
  const env = process.env.NODE_ENV;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
      {env !== 'development' && (<div dangerouslySetInnerHTML={{ __html: '<!--#include virtual="/cdn/basics/header-banco/v3.0/header-blh.html" -->' }}></div>)}
      <main>
        <Hero />
        {/* {isMobile ? <Breadcrumbs /> : <Seccion2 />} */}
        <Breadcrumbs />
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />
        <Seccion5 />
      </main>
      {env !== 'development' && (<div dangerouslySetInnerHTML={{ __html: '<!--#include virtual="/cdn/basics/footer-banco/v3.0/footer-blh.html" -->' }}></div>)}
    </>
  )
}
