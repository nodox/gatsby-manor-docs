import React from 'react';
import NotFoundPage from '../../src/pages/404';

describe('<NotFoundPage />', () => {
  const component = mount(
    <NotFoundPage  />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
