import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'
import Link from "next/link"
// import links from '@/config/links.json';

const siteurl = process.env.NEXT_PUBLIC_SITEURL;
export default props => {
  return <div>
  <Card>
    <Img name="chicaBlog" className="card-img-top" />
    <CardBody className="pt-4">
      <h3 className=" pb-1 fs-5">Tarjeta de Crédito</h3>
      <p>
      Cada compra con tu tarjeta LAFISE se convierte en una  oportunidad
      </p>
    </CardBody>
    <CardFooter className="pt-2">
      <Link href={`https://www.lafise.com/blh/banca-personal/tarjetas/tarjetas-de-credito/`} className="link fw-semibold clr">Conocer más ›</Link>
    </CardFooter>
  </Card>
</div>
}