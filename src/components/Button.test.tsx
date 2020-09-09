import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
