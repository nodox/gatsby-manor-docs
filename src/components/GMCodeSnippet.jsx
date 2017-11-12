import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const GMCodeSnippet = (props) => {
  const { children } = props;

  return (
    <pre><code>
      {children}
    </code></pre>
  );
}

export default GMCodeSnippet;
