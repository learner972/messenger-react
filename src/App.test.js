import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App Component', () => {
  test('renders the list of friends', () => {
    render(<App />);
    const friends = ['Sheldon', 'Amy'];
    friends.forEach(friend => {
      expect(screen.getByText(friend)).toBeInTheDocument();
    });
  });

  test('displays default view when no friend is selected', () => {
    render(<App />);
    expect(screen.getByText('Select User to Chat Now')).toBeInTheDocument();
  });

  test('displays chat window when a friend is selected', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Sheldon'));
    expect(screen.queryByText('Select User to Chat Now')).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type a message')).toBeInTheDocument();
  });

  test('sends a message and displays it in the chat window', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Sheldon'));
    const input = screen.getByPlaceholderText('Type a message');
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Hello Sheldon' } });
    fireEvent.click(sendButton);

    expect(screen.getByText('Hello Sheldon')).toBeInTheDocument();
  });
});
