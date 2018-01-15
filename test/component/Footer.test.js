import React from 'react';
import Footer from '../../src/components/Footer';

describe('<Footer />', () => {

  const component = mount(
    <Footer />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
