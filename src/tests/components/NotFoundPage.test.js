import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../Components/NotFoundPage';

test('Should render the Not Found page correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});