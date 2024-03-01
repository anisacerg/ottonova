import React from 'react';
import { render, screen } from '@testing-library/react';
import CityList from './CityList';
describe('CityList', () => {
  it('renders a list of cities', () => {
    // Mock cities data
    const cities = [
      {
        name: 'Sydney',
        country: 'Australia',
        continent: 'Australia',
        founded: '1788',
        landmarks: [
          'Sydney Opera House',
          'Sydney Harbour Bridge',
          'Queen Victoria Building',
        ],
      },
      {
        name: 'New York City',
        country: 'USA',
        continent: 'North America',
        founded: '1624',
        landmarks: [
          'Chrysler Building',
          'Brooklyn Bridge',
          'Madison Square Garden',
        ],
      },
      // Add more mock cities as needed
    ];

    // Render the CityList component with mock cities data
    render(<CityList cities={cities} />);

    // Verify that the cities are rendered
    expect(screen.getByText('Sydney')).toBeInTheDocument();
    expect(screen.getByText('New York City')).toBeInTheDocument();
    // Add more assertions to verify other cities and their details
  });

  // Add more test cases to cover other behaviors of the CityList component
});
