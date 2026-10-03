import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './app';

describe('Simulates User Events', () => {
  it('Increments counter on button click', async () => {
    // UserEvent.setup() returns a user controller. This approach is recommended by the react testing library
    const user = userEvent.setup();
    render(<App />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    //click increment button
    await user.click(incrementButton);
    expect(screen.getByRole('heading', { level: 2 }).textContent).toEqual('1');
  });
  it('Decrements counter on button click', async () => {
    const user = userEvent.setup();
    render(<App />);
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    // await is used because userEvent.setup() returns an instance whose methods are asynchronous
    await user.click(decrementButton);
    await user.click(decrementButton);
    expect(screen.getByRole('heading', { level: 2 }).textContent).toEqual('-2');
  });
});
