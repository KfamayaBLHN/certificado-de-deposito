import { Card, CardBody } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'

export default props => {

  return (
    <>
      <section className="carrousel-mobile">
        <Img name="beneficio1" />
        <h3 className="fs-5 pb-1 pt-5 text-center">
          Utiliza Bancanet
        </h3>
        <p className="pb-2 text-center">
          Revisa desde tu celular como crecen tus ahorros
        </p>
      </section>
    </>)


}