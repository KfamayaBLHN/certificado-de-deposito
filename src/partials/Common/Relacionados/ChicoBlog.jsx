import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'
import Link from "next/link"
// import links from '@/config/links.json';

const siteurl = process.env.NEXT_PUBLIC_SITEURL;
export default props => {
  return <div className="cardcenter">
  <Card>
    <Img name="chicoBlog" className="" />
    <CardBody className="pt-4">
      <h3 className=" pb-1 fs-5">Cuentas de Ahorro</h3>
      <p>
        Ahorra para tu próximo proyecto, elige la mejor opción
      </p>
    </CardBody>
    <CardFooter className="pt-2 cc">
      <Link href={`https://www.lafise.com/blh/banca-personal/cuentas-de-ahorro/index.html`} className="link fw-semibold">Conocer más ›</Link>
    </CardFooter>
  </Card>
</div>
}