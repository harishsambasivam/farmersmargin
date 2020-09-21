import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideNav from './SideNav';

describe('<SideNav />', () => {
  test('it should mount', () => {
    render(<SideNav />);
    
    const sideNav = screen.getByTestId('SideNav');

    expect(sideNav).toBeInTheDocument();
  });
});