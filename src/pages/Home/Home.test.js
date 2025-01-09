import React from 'react';
import { render, screen, fireEvent, waitFor  } from '@testing-library/react';
import Home from './index';
import { BrowserRouter } from 'react-router';

test('renders Home Content', async() => {
  render(
    <BrowserRouter> 
      <Home /> 
    </BrowserRouter> 
  );
  const linkElement = await screen.findByText(/Try Natiq Service/i); 
  
  expect(linkElement).toBeInTheDocument();
});

test('navigates to Natiq page on button click', async () => {
  render(
    <BrowserRouter>
      <Home /> 
    </BrowserRouter>
  );

  const linkElement = screen.getByTestId("tryNatiqLink"); 
  fireEvent.click(linkElement); 

  // Wait for the URL to change (or for any other navigation logic to complete)
  await waitFor(() => expect(window.location.pathname).toBe('/natiq')); 
});
