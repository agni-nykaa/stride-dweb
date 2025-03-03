import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '.';

describe('Accordion', () => {
  test('renders the Accordion component', () => {
    render(<Accordion title="Test Title" subTitle="Test Subtitle" keyValue="test" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  test('toggles the Accordion component', () => {
    render(<Accordion title="Test Title" subTitle="Test Subtitle" keyValue="test" />);
    const titleElement = screen.getByText('Test Title');
    fireEvent.click(titleElement);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('shows children when accordion is expanded', () => {
    render(
      <Accordion title="Test Title" subTitle="Test Subtitle" keyValue="test">
        <div>Child Content</div>    
      </Accordion>
    );
    const titleElement = screen.getByText('Test Title');
    fireEvent.click(titleElement);
    expect(screen.getByText('Child Content')).toBeVisible();
  });
});
