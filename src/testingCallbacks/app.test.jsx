import { describe, it, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './app';

describe('Input custom component', () => {
  it('Updates the input value correctly', async () => {
    const user = userEvent.setup();
    render(<Input />);
    const inputField = screen.getByRole('textbox');
    inputField.focus();
    await user.keyboard('Zulqarnain');
    expect(inputField.value).toBe('Zulqarnain');
  });
  it('Calls appropriate function upon input change', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<input onChange={handleChange} value={''} />);
    const inputField = screen.getByRole('textbox');
    inputField.focus();
    await user.keyboard('Zulqarnain');
    expect(handleChange).toHaveBeenCalledTimes(10);
  });
});
