import React from 'react';
import Community from '../../src/pages/community';

describe('<Community />', () => {
  const component = mount(
    <Community  />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
