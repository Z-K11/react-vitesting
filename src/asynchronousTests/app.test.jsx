import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from './app';

const user = { name: 'alpha', email: 'alphabravo@gmail.com' };

describe('Asynchronous component', () => {
  beforeEach(() => {
    // window.fetch is now a vitest mock function we can do with as we please
    window.fetch = vi.fn();
  });
  afterEach(() => {
    // reset the mock function before each test so it doesn't return null or undefined
    vi.resetAllMocks();
  });
  it('loading text is shown while api request is in progress', async () => {
    // resolve fetch request with user data
    window.fetch.mockResolvedValue({
      json: () => Promise.resolve(user),
    });
    //renders app app calls the fetch
    render(<App />);
    // verifies that loading text exists, explicitly
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
    // checks if there is an element with loading test ? and waits for it to be removed ? if it is never removed or it is never there ? throws an error
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });
  it("User's name is rendered", async () => {
    window.fetch.mockResolvedValue({
      json: () =>
        Promise.resolve({ name: 'alpha', email: 'alphbravo@gmail.com' }),
    });
    render(<App />);
    const user = await screen.findByText('alpha');
    expect(user).toBeInTheDocument();
  });
  it('Error message is shown', async () => {
    // reject fetch with message
    window.fetch.mockRejectedValue({ message: 'Api is down' });
    render(<App />);
    const errorMessage = await screen.findByText('Api is down');
    expect(errorMessage).toBeInTheDocument();
  });
});
