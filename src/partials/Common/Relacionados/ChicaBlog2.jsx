import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'
import Link from "next/link"
// import links from '@/config/links.json';

const siteurl = process.env.NEXT_PUBLIC_SITEURL;
export default props => {
  return <div>
  <Card>
    <Img name="chicaBlog2" className="card-img-top" />
    <CardBody className="pt-4">
      <h3 className=" pb-1 fs-5">Préstamos personales</h3>
      <p>
        Cumple tus metas personales sin límites
      </p>
      <br></br>
    </CardBody>
    <CardFooter className="pt-2">
      <Link href={`https://www.lafise.com/blh/PrestamosBLH/personal.html`} className="link fw-semibold">Conocer más ›</Link>
    </CardFooter>
  </Card>
</div>
}