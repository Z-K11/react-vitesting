import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MultiElementComponent from './component';

describe('MultiElementComponent', () => {
  it('Renders ul Element', () => {
    render(<MultiElementComponent />);
    const unOrderedList = screen.getByRole('list');

    expect(unOrderedList).toBeInTheDocument();
  });
  it('Renders Ul element with correct class', () => {
    render(<MultiElementComponent />);
    const unOrderedList = screen.getByRole('list');
    expect(unOrderedList).toHaveClass('animals');
  });
  it('Renders component with five list items', () => {
    render(<MultiElementComponent />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toEqual(5);
  });
});
