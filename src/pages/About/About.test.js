import React from 'react';
import { render, screen  } from '@testing-library/react';
import About from './index';

test('renders About Content', async() => {
  render(
    <About /> 
  );
  const ourMissionTitleElement = await screen.findByText(/Our mission/i); 
  
  expect(ourMissionTitleElement).toBeInTheDocument();

  const historyTitleElement = await screen.findByText(/History/i); 
  
  expect(historyTitleElement).toBeInTheDocument();
});
