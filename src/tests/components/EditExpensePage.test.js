import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../Components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, removeExpense;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense}
      expense={expenses[2]}
    />);
});

test('Should render edit expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('Should handle onRemove', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});


