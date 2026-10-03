import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FirstTestComponent from './firstTest';

describe('FirstTestComponent', () => {
  it('Renders A heading', () => {
    render(<FirstTestComponent />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
  // test text content inside the heading
  it('Renders with correct text', () => {
    render(<FirstTestComponent />);
    expect(
      screen.getByRole('heading', { name: 'Hello World', level: 1 }).textContent
    ).toMatch('Hello World');
  });
});
