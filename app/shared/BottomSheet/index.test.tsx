import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BottomSheet from './index';

describe('BottomSheet', () => {
  test('renders the BottomSheet component', () => {
    render(
      <BottomSheet isOpen={true} onClose={() => {}}>
        <div>Test Content</div>
      </BottomSheet>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('closes the BottomSheet when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <BottomSheet isOpen={true} onClose={onClose}>
        <div>Test Content</div>
      </BottomSheet>
    );
    fireEvent.click(screen.getByText('×'));
    expect(onClose).toHaveBeenCalled();
  });

//   test('closes the BottomSheet when clicking outside if closeOnClickOutside is true', () => {
//     const onClose = jest.fn();
//     render(
//       <BottomSheet isOpen={true} onClose={onClose} closeOnClickOutside={true}>
//         <div>Test Content</div>
//       </BottomSheet>
//     );
//     fireEvent.click(document.body);
//     expect(onClose).toHaveBeenCalled();
//   });

//   test('does not close the BottomSheet when clicking outside if closeOnClickOutside is false', () => {
//     const onCloseBottomSheet = jest.fn();
//     render(
//       <BottomSheet isOpen={true} onClose={onCloseBottomSheet} closeOnClickOutside={false}>
//         <div>Test Content</div>
//       </BottomSheet>
//     );
//     fireEvent.click(document.body);
//     expect(onCloseBottomSheet).toHaveBeenCalledTimes(0);
//   });
});
