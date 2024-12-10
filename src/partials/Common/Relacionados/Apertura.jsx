import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'
// import Link from "next/link"
// import links from '@/config/links.json';
// const siteurl = process.env.NEXT_PUBLIC_SITEURL;
export default props => {
  return <Card>
    <Img name="AperturaSvg" className="card-img" />
    <CardBody>
      <h3 className="fs-5 pb-1 pt-2">
      Apertura
      </h3>
      <p>
      tu cuenta desde L1,000 o $100 
      </p>
    </CardBody>
  </Card>
}