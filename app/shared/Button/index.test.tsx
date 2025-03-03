import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom/extend-expect';
import { describe, it, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { BUTTON_VARIANTS, BUTTON_SIZES } from './constants';
import Button from './index';

expect.extend(matchers);

describe('Button component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule('background', '#000');
    expect(buttonElement).toHaveStyleRule('color', '#fff');
  });

  it('renders with custom variant and size', () => {
    render(
      <Button
        variant={BUTTON_VARIANTS.PRIMARY}
        size={BUTTON_SIZES.LARGE}
      >
        Click me
      </Button>,
    );
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule('background', '#000');
    expect(buttonElement).toHaveStyleRule('color', '#fff');
  });

  it('applies custom styles', () => {
    const customStyles = { color: 'red' };
    render(<Button customStyles={customStyles}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule('color', '#fff');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
