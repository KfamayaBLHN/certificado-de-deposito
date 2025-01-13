import CardBoostrap from 'react-bootstrap/Card';

const Card = ({ img, imgAlt, imgTitle, imgWidth, imgHeight, imgClass, borderClass, children, extraClassName }) => {
  const baseClass = "card shadow-sm mx-md-2 my-1 d-flex";
  const finalBorderClass = borderClass || "border border-md-0 border-0";
  const combinedClass = `${baseClass} ${finalBorderClass} ${extraClassName || ''}`;

  return (
    <CardBoostrap bsPrefix={combinedClass}>      
      <CardBoostrap.Img
        variant="top"
        src={img}
        alt={imgAlt ?? ''}
        title={imgTitle ?? ''}
        width={imgWidth}
        height={imgHeight}
        className={`img-fluid ${imgClass || ''}`}
      />
      <CardBoostrap.Body bsPrefix="no-card-body p-4 d-flex flex-column h-100">
        {children}
      </CardBoostrap.Body>
    </CardBoostrap>
  ); 
}

export default Card;
