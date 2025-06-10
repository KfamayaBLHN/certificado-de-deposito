import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'
// import Link from "next/link"
// import links from '@/config/links.json';
// const siteurl = process.env.NEXT_PUBLIC_SITEURL;
export default props => {
  return (
    <>
      <section className="carrousel-mobile">
        <Img name="beneficio2" />
        <h3 className="fs-5 pb-1 pt-4 text-center">
          Accede a créditos
        </h3>
        <p className="pb-2 text-center">
          Úsalo como garantía para obtener un Préstamo o Tarjeta de Crédito
        </p>
      </section>
    </>)
}