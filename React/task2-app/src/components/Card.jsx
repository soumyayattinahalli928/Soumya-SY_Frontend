import React from 'react';
import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="./flower1.jpg"
      />
  
    </Figure>
  );
}

export default FigureExample;