import React from 'react';
import { render, screen, fireEvent, act, waitFor  } from '@testing-library/react';
import { jest } from '@jest/globals'; 
import Natiq from './index';

test('renders Natiq Content', async() => {
  render(
    <Natiq /> 
  );
  const tryNatiqTitleElement = await screen.findByText(/Try Natiq Service/i); 
  
  expect(tryNatiqTitleElement).toBeInTheDocument();
});

describe('check Natiq Service', () => {

  test('Natiq Service Button is Disabled in the first render', async () => {
    render(
      <Natiq /> 
    );
    const natiqServiceBtnElement = screen.getByTestId("natiqServiceBtn"); 

    expect(natiqServiceBtnElement).toBeDisabled();
  });

  test('Natiq Service Button is not Disabled after fill input', async() => {
    render(
      <Natiq /> 
    );
    const txtInput = await screen.findByPlaceholderText("Enter Text Here")

    fireEvent.change(txtInput, {target: {value: 'السلام عليكم'}})
    const natiqServiceBtnElement = screen.getByTestId("natiqServiceBtn"); 

    expect(natiqServiceBtnElement).not.toBeDisabled();
  });

  test('Error after fill input with English', async() => {
    render(
      <Natiq /> 
    );
    const txtInput = await screen.findByPlaceholderText("Enter Text Here")

    fireEvent.change(txtInput, {target: {value: 'Hello'}})
    const natiqServiceBtnElement = screen.getByTestId("natiqServiceBtn"); 

    expect(natiqServiceBtnElement).toBeDisabled();

    const errorMessageElement = await screen.findByText(/We support only Arabic language/i); 

    expect(errorMessageElement).toBeInTheDocument();
  });

  test('Natiq Service it self', async() => {

    render(
      <Natiq /> 
    );

    const txtInput = await screen.findByPlaceholderText("Enter Text Here")

    act(() => {
      fireEvent.change(txtInput, {target: {value: 'السلام عليكم'}})
    });
    const natiqServiceBtnElement = screen.getByTestId("natiqServiceBtn"); 

    expect(natiqServiceBtnElement).not.toBeDisabled();

    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.reject(new Error('API request failed'));
    });

    act(() => {
      fireEvent.click(natiqServiceBtnElement);
    });

    const loadingWrapperElement = screen.getByTestId("loadingWrapper"); 

    expect(loadingWrapperElement).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(/there is error, please try again/i)).toBeInTheDocument());
    
  });
});


