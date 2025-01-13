import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'

// const siteurl = process.env.NEXT_PUBLIC_SITEURL;
export default props => {
  return (
    <>
      <section className="carrousel-mobile">
        <Img name="beneficio6" />
        <h3 className="fs-5 pb-1 pt-5 text-center">
          Tasa de interés preferencial
        </h3>
        <p className="pb-2 text-center">
          Disfruta de una tasa de interés más alta
        </p>
      </section>
    </>)
}