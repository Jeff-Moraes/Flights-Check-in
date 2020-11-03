import React from 'react'
import Home from '../../pages/Home';
import { render, fireEvent, waitFor } from '@testing-library/react';

const mockedHistoryPush = jest.fn();
const setFlightNumber = jest.fn();
const setLastName = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    history: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }) => children,
  }
})

describe('Home Page', () => {

  it('Should be able to insert flight number and passenger last name', async () => {
    const { getByLabelText, getByText } = render(<Home />);

    const flightField = getByLabelText('Flight Number');
    const lastNameField = getByLabelText('Last Name');
    const buttonElement = getByText('Search flight');
    
    await waitFor(() => {
      fireEvent.change(flightField, { target: { value: 'FR170'}});
      fireEvent.change(lastNameField, { target: { value: 'Leone'}});
    });
  
    fireEvent.click(buttonElement);
    
    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/passenger-info');
    })
  })
});