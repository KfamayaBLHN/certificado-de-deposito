import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'
// import Link from "next/link"
// import links from '@/config/links.json';
// const siteurl = process.env.NEXT_PUBLIC_SITEURL;
export default props => {
  return (
    <>
      <section className="carrousel-mobile">
        <Img name="beneficio4" />
        <h3 className="fs-5 pb-1 pt-5 text-center">
          Disponible en la moneda que deseas
        </h3>
        <p className="pb-2 text-center">
          Solicítalo en lempiras o dólares
        </p>
      </section>
    </>)
}