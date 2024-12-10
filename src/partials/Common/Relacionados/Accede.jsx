import { Card, CardBody } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'

export default props => {

  return <Card>
    <Img name="AccedeSvg" className="card-img"/>
    <CardBody>
      <h3 className="fs-5 pb-1 pt-2">
      Accede
      </h3>
      <p className="pb-2">
        a Bancanet para gestionar tus ahorros
      </p>
    </CardBody>
  </Card>
}