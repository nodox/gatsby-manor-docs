import React from 'react';
import IndexPage from '../../src/pages/index';

describe('<IndexPage />', () => {
  const testData = {
    massivelyImage: 'image',
    lensImage: 'image',
    photonImage: 'image',
    identityImage: 'image',
    dimensionImage: 'image',
    tessellateImage: 'image',
    hero: {
      lead: {
        title: 'Content gallery',
        partOne: 'First content',
        partTwo: 'Content area.',
        callToAction: 'Action',
      },
    },
  };

  const component = shallow(
    <IndexPage  data={testData} />
  );

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    const props = component.instance().props;

    expect(props).toHaveProperty('data');
    expect(props).toHaveProperty('data.hero');
    expect(props).toHaveProperty('data.massivelyImage');
    expect(props).toHaveProperty('data.lensImage');
    expect(props).toHaveProperty('data.photonImage');
    expect(props).toHaveProperty('data.identityImage');
    expect(props).toHaveProperty('data.dimensionImage');
    expect(props).toHaveProperty('data.tessellateImage');  });
});
