import React from 'react';
import TemplateWrapper from '../../src/layouts/index';

describe('<TemplateWrapper />', () => {
  const testData = {
    location: {
      pathname: '/home'
    }
  };

  const children = jest.fn();

  const component = shallow(
    <TemplateWrapper
      location={testData.location}
      children={children} />
  );


  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render have the right props', () => {
    const props = component.instance().props;
    expect(props).toHaveProperty('children');
    expect(props).toHaveProperty('location');
  });
});
