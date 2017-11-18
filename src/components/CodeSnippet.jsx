import React from 'react';

const CodeSnippet = (props) => {
  const { children } = props;

  return (
    <pre><code>
      {children}
    </code></pre>
  );
}

export default CodeSnippet;
