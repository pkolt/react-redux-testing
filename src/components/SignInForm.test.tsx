import React from 'react';
import SignInForm from './SignInForm';
import { shallow } from 'enzyme';

describe('<SignInForm />', () => {
  it('renders without crashing', () => {
    const mockOnSubmit = jest.fn();
    const wrapper = shallow(<SignInForm onSubmit={mockOnSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });
});
