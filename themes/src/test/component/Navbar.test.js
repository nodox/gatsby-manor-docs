import React from 'react';
import Navbar from '../../src/components/Navbar';

describe('<Navbar />', () => {
  const testData = {
    location: {
      pathname: '/home'
    },
    displayMenu: false,
  };

  const enableSideMenu = jest.fn();

  const component = shallow(
    <Navbar
      location={testData.location}
      displayMenu={testData.displayMenu}
      enableSideMenu={enableSideMenu} />
  );

  const props = component.instance().props;

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should open on menu button click', () => {
    const sideMenuButtion = component.find('.navbar--sidemenu--button');
    sideMenuButtion.simulate('click');
    expect(enableSideMenu).toBeCalledWith(true);
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('location');
    expect(props).toHaveProperty('displayMenu');
    expect(props).toHaveProperty('enableSideMenu');
  });
});
