import React from 'react';
import SideNav from '../../src/components/SideNav';

describe('<SideNav />', () => {
  const testData = {
    headline: 'Test Headline',
    content: 'Yay, we have content!',
    location: '/home',
    displayMenu: false,
  };

  const enableSideMenu = jest.fn();

  const component = shallow(
    <SideNav
      data={testData}
      location={testData.location}
      displayMenu={testData.displayMenu}
      enableSideMenu={enableSideMenu} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should close on link button click', () => {
    const linkItems = component.find('.sidenav--list--item');
    linkItems.forEach(link => {
      link.simulate('click');
      expect(enableSideMenu).toBeCalledWith(false);
    })

  });

  it('should close on exit button click', () => {
    const closeMenuButtion = component.find('.sidenav--close--button');
    closeMenuButtion.simulate('click');
    expect(enableSideMenu).toBeCalledWith(false);
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('data');
    expect(props).toHaveProperty('location');
    expect(props).toHaveProperty('displayMenu');
    expect(props).toHaveProperty('enableSideMenu');
  });
});
