import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs'

export default props => {
  return (
    <>
      <Breadcrumbs items={
        [
          {label: "Inicio", url: 'https://www.lafise.com/blh', title: 'Banco LAFISE'},
          {label: "Banca personal", url: 'https://www.lafise.com/blh/banca-personal', title: 'Banco LAFISE - banca personal'},
          {label: "Cuenta Horizonte", url: '#'}
        ]
      } />
    </>
  );
}