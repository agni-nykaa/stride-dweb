// @ts-nocheck

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dots from './index';

describe('Dots component', () => {
  const mockOnClick = jest.fn();

  it('renders dots correctly', () => {
    render(
      <Dots
        count={3}
        activeIndex={1}
        onClick={mockOnClick}
      />,
    );
    const dots = screen.getAllByRole('button');
    expect(dots).toHaveLength(3);
  });

  it('highlights the active dot', () => {
    render(
      <Dots
        count={3}
        activeIndex={1}
        onClick={mockOnClick}
      />,
    );
    const activeDot = screen.getAllByRole('button')[1];
    expect(activeDot).toHaveStyle('color: primary');
  });

  it('calls onClick handler when a dot is clicked', () => {
    render(
      <Dots
        count={3}
        activeIndex={1}
        onClick={mockOnClick}
      />,
    );
    const dot = screen.getAllByRole('button')[0];
    fireEvent.click(dot);
    expect(mockOnClick).toHaveBeenCalledWith(0);
  });
});
