import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'

// const siteurl = process.env.NEXT_PUBLIC_SITEURL;
export default props => {
  return <Card>
    <Img name="ObtenSvg" className="card-img" />
    <CardBody>
      <h3 className="fs-5 pb-1 pt-2">
      Obtén
      </h3>
      <p className="pb-0">
      una Tarjeta de Débito de uso internacional
      </p>
    </CardBody>
  </Card>
}