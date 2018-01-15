import React from 'react';
import Highlight from '../../src/components/Highlight';

describe('<Highlight />', () => {
  const testData = {
    headline: 'Test Headline',
    content: 'Yay, we have content!'
  };

  const component = mount(
    <Highlight data={testData}/>
  );

  const props = component.props();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('data.headline');
    expect(props).toHaveProperty('data.content');
  });
});
