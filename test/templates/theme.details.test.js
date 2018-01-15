import React from 'react';
import ThemeDetailsTemplate from '../../src/templates/theme.details';

describe('<ThemeDetailsTemplate />', () => {
  const testData = {
    massivelyImage: 'image',
    lensImage: 'image',
    photonImage: 'image',
    identityImage: 'image',
    dimensionImage: 'image',
    tessellateImage: 'image',
    location: {
      pathname: "/home",
    },
    markdownRemark: {
      html: {},
      frontmatter: {},
    },
  };

  const spy = jest.spyOn(ThemeDetailsTemplate.prototype, 'toggleSidemenu');

  const component = shallow(
    <ThemeDetailsTemplate
      data={testData}
      location={testData.location}/>
  );

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should toggle the sidemenu on menu button click', () => {
    const openSideMenuButtion = component.find('.theme--details--main--open');
    openSideMenuButtion.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should toggle the sidemenu on close button click', () => {
    const closeSideMenuButtion = component.find('.theme--details--sidemenu--close');
    closeSideMenuButtion.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should have the right props', () => {
    const props = component.instance().props;

    expect(props).toHaveProperty('data');
    expect(props).toHaveProperty('data.markdownRemark');
    expect(props).toHaveProperty('data.markdownRemark.html');
    expect(props).toHaveProperty('data.markdownRemark.frontmatter');

    expect(props).toHaveProperty('data.massivelyImage');
    expect(props).toHaveProperty('data.lensImage');
    expect(props).toHaveProperty('data.photonImage');
    expect(props).toHaveProperty('data.identityImage');
    expect(props).toHaveProperty('data.dimensionImage');
    expect(props).toHaveProperty('data.tessellateImage');

    expect(props).toHaveProperty('location');
    expect(props).toHaveProperty('location.pathname');

  });
});
