import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images';

export default props => {
  return (
    <>
      <section className="carrousel-mobile">
        <Img name="beneficio5" />
        <h3 className="fs-5 pb-1 pt-5 text-center">
          Plazos adaptados a tus<br/> necesidades
        </h3>
        <p className="pb-2 text-center">
          desde 3, 6, 9 y 12 meses
        </p>
      </section>
    </>)
}