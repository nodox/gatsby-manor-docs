import React from 'react';
import Jumbotron from '../../src/components/Jumbotron';

describe('<Jumbotron />', () => {
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


  it('should render without center class', () => {
    const component = shallow(
      <Jumbotron data={testData} />
    );

    expect(component).toMatchSnapshot();
  });

  it('should render with center class', () => {
    const component = shallow(
      <Jumbotron center data={testData} />
    );

    expect(component).toMatchSnapshot();
  });
});
