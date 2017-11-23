import React from 'react';

import "../styles/_snippets.scss";

const CodeSnippet = (props) => {
  const { children } = props;

  return (
    <pre><code>
      {children}
    </code></pre>
  );
}

export default CodeSnippet;
