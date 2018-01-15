import React from 'react';
import CodeSnippet from '../../src/components/CodeSnippet';

describe('<CodeSnippet />', () => {

  const component = mount(
    <CodeSnippet />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
