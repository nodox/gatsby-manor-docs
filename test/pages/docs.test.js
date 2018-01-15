import React from 'react';
import Docs from '../../src/pages/docs';

describe('<Docs />', () => {
  var testData = {
    allMarkdownRemark: {
      edges: []
    }
  }

  const component = shallow(
    <Docs data={testData}/>
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
