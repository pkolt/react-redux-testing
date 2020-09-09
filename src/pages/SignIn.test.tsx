import React from 'react';
import SignIn from './SignIn';
import { mount } from 'enzyme';
import { WrappingComponent } from '../helperTests';

describe('<SignIn />', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<SignIn />, {
        wrappingComponent: WrappingComponent,
    });
    expect(wrapper).toMatchSnapshot();
  });
});