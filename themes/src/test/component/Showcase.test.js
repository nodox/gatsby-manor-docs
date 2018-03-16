import React from 'react';
import Showcase from '../../src/components/Showcase';

describe('<Showcase />', () => {
  const testData = {
    lead: {
      title: 'Theme Gallery',
      partOne: 'Developers deserve beautiful designs.',
      partTwo: 'Find a theme. Let Jay do the rest.',
      callToAction: {
        path: '/hello',
        text: 'hello world',
      },
    }
  };

  const component = shallow(
    <Showcase
      data={testData}
      images={testData} />
  );

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

});
